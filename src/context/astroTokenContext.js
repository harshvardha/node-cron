import { useState, useEffect } from "react"
import {
    BUSD_CONTRACT_ADDRESS,
    ICO_CONTRACT_ADDRESS,
    REFFERAL_CONTRACT_ADDRESS,
    BUSD_ADDRESS,
    BNB_ADDRESS,
    BSC_TESTNET_CHAINID,
    BSC_TESTNET_RPC,
    BSC_TESTNET_BLOCK_EXPLORER_URL
} from "../utils/constants"
import icoABI from "../utils/ico.json"
import busdABI from "../utils/busd.json"
import refferalABI from "../utils/refferal.json"
import Web3 from "web3"
import React from "react"
const { ethereum } = window

const AstroTokenContext = React.createContext()

const toWei = (amount) => Web3.utils.toWei(amount.toString(), 'ether')
const fromWei = (amount) => Web3.utils.fromWei(amount.toString(), 'ether')

function createContractInstance() {
    const provider = new Web3(Web3.givenProvider || BSC_TESTNET_RPC)
    const icoContract = new provider.eth.Contract(icoABI, ICO_CONTRACT_ADDRESS)
    const busdContract = new provider.eth.Contract(busdABI, BUSD_CONTRACT_ADDRESS)
    const refferalContract = new provider.eth.Contract(refferalABI, REFFERAL_CONTRACT_ADDRESS)
    return { icoContract, busdContract, refferalContract }
}

const AstroTokenContextProvider = ({ children }) => {
    const [userAddress, setUserAddress] = useState("")
    const [stage, setStage] = useState(0)
    const [price, setPrice] = useState(0)
    const [totalTokens, setTotalTokens] = useState(0)
    const [totalTokensBought, setTotalTokensBought] = useState(0)
    const [allReferals, setAllReferals] = useState(0)
    const [eligibleAmount, setEligibalAmount] = useState(0)
    const [refferalIncome, setRefferalIncome] = useState(0)
    const [transactionFee, setTransactionFee] = useState(0)
    const [poolForUser, setPoolForUser] = useState(0)

    const _checkForNetwork = async () => {
        const provider = new Web3(ethereum)
        const chainId = await provider.eth.getChainId()
        if (Number(chainId) !== BSC_TESTNET_CHAINID) {
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: Web3.utils.toHex(BSC_TESTNET_CHAINID) }]
                })
            } catch (error) {
                if (error.code === 4902) {
                    ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: Web3.utils.toHex(BSC_TESTNET_CHAINID),
                                rpcUrls: [BSC_TESTNET_RPC],
                                chainName: 'Binance Testnet',
                                nativeCurrency: {
                                    name: 'TBNB',
                                    symbol: 'TBNB',
                                    decimals: 18
                                },
                                blockExplorerUrls: [BSC_TESTNET_BLOCK_EXPLORER_URL]
                            }
                        ]
                    })
                }
            }
        }
    }

    const connectWallet = async () => {
        if (!ethereum) {
            window.alert("Please install MetaMask")
        } else {
            _checkForNetwork()
            await ethereum.request({ method: 'eth_requestAccounts' })
            const web3 = new Web3(Web3.givenProvider)
            const accounts = await web3.eth.getAccounts()
            console.log("meta mask: ", accounts[0])
            setUserAddress(accounts[0])
            localStorage.setItem('userAddress', accounts[0])
            getData(accounts[0])
        }
    }

    const getDataWithoutUserAddress = async () => {
        const { icoContract } = createContractInstance()
        const currentStage = await icoContract.methods.getStage().call()
        const currentPrice = await icoContract.methods.getPrice(BNB_ADDRESS).call()
        setPrice(currentPrice)
        setStage(currentStage)
    }

    const getData = async (userAddr) => {
        const { icoContract, refferalContract } = createContractInstance()
        try {
            getDataWithoutUserAddress()
            const tokensBought = await icoContract.methods.tokenBoughtUser(userAddr).call()
            const referals = await refferalContract.methods.getAllRefrees(userAddr).call()
            const refIncome = await icoContract.methods.referalIncome(userAddr).call()
            setTotalTokensBought(fromWei(tokensBought))
            setAllReferals(referals.length)
            setRefferalIncome(refIncome)
        } catch (error) {
            console.error(error)
        }
    }

    const updateTotalTokens = (amount) => {
        if (amount >= 50)
            setTotalTokens(amount / price)
        else
            setTotalTokens(0)
    }

    const updatePrice = async (currency) => {
        const { icoContract } = createContractInstance()
        let tokenPrice
        if (currency === "BNB") {
            tokenPrice = await icoContract.methods.getPrice(BNB_ADDRESS).call()
        } else {
            tokenPrice = await icoContract.methods.getPrice(BUSD_ADDRESS).call()
        }
        setPrice(tokenPrice / 100000000)
    }

    const updateTotalTokensBought = async () => {
        const { icoContract } = createContractInstance()
        const tokensBought = await icoContract.methods.tokenBoughtUser(userAddress).call()
        setTotalTokensBought(fromWei(tokensBought))
    }

    const updateTransactionFees = async () => {
        const web3 = new Web3(ethereum || BSC_TESTNET_RPC)
        const gasPrice = await web3.eth.getGasPrice()
        const tx = {
            from: userAddress,
            gasPrice: gasPrice
        }
        const gasLimit = await web3.eth.estimateGas(tx)
        const txFees = gasPrice * gasLimit
        console.log(txFees)
        setTransactionFee(fromWei(txFees))
    }

    const buyAstroToken = async (amount, currency) => {
        try {
            const { icoContract, busdContract } = createContractInstance()
        let currentPrice, currencyAddress, noOfTokens
        console.log("user address: ", userAddress)
        console.log("bnb address: ", BNB_ADDRESS)
        console.log("busd address: ", BUSD_ADDRESS)
        if (currency === "BNB") {
            currencyAddress = BNB_ADDRESS
            currentPrice = await icoContract.methods.getPrice(BNB_ADDRESS).call()
            console.log(currentPrice,"if")
            noOfTokens = toWei(amount / (currentPrice / 100000000))
            await icoContract.methods.buyToken(currencyAddress, noOfTokens, userAddress)
                .send({ from: userAddress, value: noOfTokens }).on('transactionHash', (hash) => {
                    console.log("BNB Transaction Confirmed")
                    updateTotalTokensBought()
                })
        } else if (currency === "BUSD") {
            currencyAddress = BUSD_ADDRESS
            console.log(busdContract)
            currentPrice = await icoContract.methods.getPrice(BUSD_ADDRESS).call()
            console.log(currentPrice,"else")
            noOfTokens = toWei(amount / (currentPrice / 100000000))
            await busdContract.methods.approve(ICO_CONTRACT_ADDRESS, noOfTokens).send({ from: userAddress })
            await icoContract.methods.buyToken(currencyAddress, noOfTokens, userAddress)
                .send({ from: userAddress }).on('transactionHash', (hash) => {
                    console.log("BUSD Transaction Confirmed")
                    updateTotalTokensBought()
                })
        }
        } catch (error) {
            console.log(error)
        }
    }

    const logoutUser = () => {
        localStorage.removeItem('userAddress')
        setUserAddress("")
        setTotalTokens(0)
        setTotalTokensBought(0)
        setAllReferals(0)
        setEligibalAmount(0)
        setRefferalIncome(0)
        setTransactionFee(0)
    }

    const getPoolElegible = async(address) => {
        try {
            const { icoContract, busdContract } = createContractInstance()
            const elegible = await icoContract.methods.getPoolAndAmount(address).call()
            setEligibalAmount(elegible?.amountRemaining/Math.pow(10,8))
            setPoolForUser(elegible?.pool)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataWithoutUserAddress()
        const address = localStorage.getItem('userAddress')
        if (address !== "undefined" && address !== null) {
            setUserAddress(address)
            getData(address)
            getPoolElegible(address)
        }
    }, [])

    return (
        <AstroTokenContext.Provider
            value={{
                userAddress,
                stage,
                totalTokens,
                totalTokensBought,
                allReferals,
                eligibleAmount,
                refferalIncome,
                transactionFee,
                connectWallet,
                updateTotalTokens,
                updatePrice,
                buyAstroToken,
                updateTransactionFees,
                logoutUser,
                poolForUser
            }}
        >
            {children}
        </AstroTokenContext.Provider>
    )
}

export { AstroTokenContext, AstroTokenContextProvider }