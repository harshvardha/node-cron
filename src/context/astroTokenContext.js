import { useState, useEffect } from "react"
import {
    BUSD_CONTRACT_ADDRESS,
    ICO_CONTRACT_ADDRESS,
    BUSD_ADDRESS,
    BNB_ADDRESS
} from "../utils/constants"
import icoABI from "../utils/ico.json"
import busdABI from "../utils/busd.json"
import Web3 from "web3"
import React from "react"
const { ethereum } = window

const AstroTokenContext = React.createContext()

const toWei = (amount) => Web3.utils.toWei(amount.toString(), 'ether')
const fromWei = (amount) => Web3.utils.fromWei(amount.toString(), 'ether')

function createContractInstance() {
    const provider = new Web3(ethereum)
    const icoContract = new provider.eth.Contract(icoABI, ICO_CONTRACT_ADDRESS)
    const busdContract = new provider.eth.Contract(busdABI, BUSD_CONTRACT_ADDRESS)
    return { icoContract, busdContract }
}

const AstroTokenContextProvider = ({ children }) => {
    const [icoContract, setIcoContract] = useState(null)
    const [busdContract, setBusdContract] = useState(null)
    const [userAddress, setUserAddress] = useState("")
    const [stage, setStage] = useState(0)
    const [price, setPrice] = useState(0)

    const connectWallet = async () => {
        if (!ethereum) {
            window.alert("Please install MetaMask")
        } else {
            console.log(icoContract)
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            const currentStage = await icoContract.methods.getStage().call()
            console.log(currentStage)
            setUserAddress(accounts[0])
            setStage(currentStage)
        }
    }

    const getPrice = async (currency) => {
        let tokenPrice
        const { icoContract } = createContractInstance()
        if (currency === "BNB") {
            tokenPrice = await icoContract.methods.getPrice(BNB_ADDRESS).call()
            console.log("BNB: ", tokenPrice)
        } else {
            tokenPrice = await icoContract.methods.getPrice(BUSD_ADDRESS).call()
            console.log("BUSD: ", tokenPrice)
        }
        setPrice(tokenPrice / 100000000)
    }

    const buyAstroToken = async (amount, currency) => {
        let currentPrice, currencyAddress, noOfTokens
        if (currency === "BNB") {
            currencyAddress = BNB_ADDRESS
            currentPrice = await icoContract.methods.getPrice(BNB_ADDRESS).call()
            noOfTokens = toWei(amount / (currentPrice / 100000000))
            await icoContract.methods.buyToken(currencyAddress, noOfTokens, userAddress)
                .send({ from: userAddress, value: noOfTokens }).on('txHash', () => {
                    console.log("BNB Transaction Confirmed")
                })
        } else if (currency === "BUSD") {
            currencyAddress = BUSD_ADDRESS
            console.log(busdContract)
            currentPrice = await icoContract.methods.getPrice(BUSD_ADDRESS).call()
            noOfTokens = toWei(amount / (currentPrice / 100000000))
            await busdContract.methods.approve(ICO_CONTRACT_ADDRESS, noOfTokens).send({ from: userAddress })
            await icoContract.methods.buyToken(currencyAddress, noOfTokens, userAddress)
                .send({ from: userAddress }).on('txHash', () => {
                    console.log("BUSD Transaction Confirmed")
                })
        }
    }

    useEffect(() => {
        const { icoContract, busdContract } = createContractInstance()
        setIcoContract(icoContract)
        setBusdContract(busdContract)
    }, [])

    return (
        <AstroTokenContext.Provider
            value={{
                userAddress,
                stage,
                price,
                connectWallet,
                getPrice,
                buyAstroToken
            }}
        >
            {children}
        </AstroTokenContext.Provider>
    )
}

export { AstroTokenContext, AstroTokenContextProvider }