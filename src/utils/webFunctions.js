import Web3 from "web3";
import { icoAbi, icoAddress ,tokenAbi} from "./config";

const getIcoContractInctance = () => {
    const web3 = new Web3(Web3.givenProvider||process.env.REACT_APP_BSC_RPC)
    return new web3.eth.Contract(icoAbi,icoAddress)
}

const getTokenInstance = (tokenAddress) => {
    const web3 = new Web3(Web3.givenProvider||process.env.REACT_APP_BSC_RPC)
    return new web3.eth.Contract(tokenAbi,tokenAddress)
}

export const getAddress = async() =>{
    const web3 = new Web3(Web3.givenProvider||process.env.REACT_APP_BSC_RPC)
    const addresses = await web3.eth.getAccounts()
    return addresses[0]
}

export const getAmountInEther = async (amount) => {
    const web3 = new Web3(Web3.givenProvider || process.env.REACT_APP_BSC_RPC);
    return web3.utils.fromWei(amount.toString(), "ether");
};

const approveToken = async (tokenAddress, amount, address) => {
    const tokenContract = getTokenInstance(tokenAddress);
    const userAddress = await getAddress();
    await tokenContract.methods.approve(address, amount).send({
      from: userAddress,
    });
  };

const addresses = {
    "BNB" : "0x9CfCD3D329549D9A327114F5ABf73637d13eFD07",
    "BUSD" : "0xf906D9c24e98c8CAf3aF6b8a52C03D94DEF3499F"
}

// const getPrice = async(amount) =>{
//     const icoContract = getIcoContractInctance()
//     const get
// }

export const getPriceForToken = async(amount,token) =>{
    const icoContract = getIcoContractInctance()
    return await icoContract.methods.getPriceForTokens(addresses[token],amount*10000).call()
}

export const getUsdPrice = async(amount,token) =>{
    const icoContract = getIcoContractInctance()
    const stage =  await icoContract.methods.getStage().call()
    const stagePrice =  await icoContract.methods.getStagePrice(stage).call()
    const tokenPrice = await icoContract.methods.getPriceForTokens(addresses[token],amount*10000).call()
    console.log(tokenPrice,stagePrice)
    return (stagePrice*tokenPrice/Math.pow(10,8+18)).toFixed(8)
}

export const buyAstor = async(tokenName,value,address) =>{
    console.log(tokenName,value,address)
    const icoContract = getIcoContractInctance()
    const userAddress = await getAddress()
    const amount = await getPriceForToken(value,tokenName)
    console.log(userAddress,"userAddress")
    if(tokenName === "BNB"){
        return await icoContract.methods.buyToken(addresses[tokenName],amount,address).send({from:userAddress,value:amount})
    }
    else{
        const busdAddress = await icoContract.methods.busd().call()
        await approveToken(busdAddress,amount,icoAddress)
        return await icoContract.methods.buyToken(addresses[tokenName],amount,address).send({from:userAddress})
    }
}