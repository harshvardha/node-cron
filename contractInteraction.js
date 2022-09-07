const ethers = require("ethers")
const { contractAbi, contractAddr } = require("./constants")
const cron = require("node-cron")

// network: localhost
const network = "http://127.0.0.1:8545"

// provider
const provider = ethers.providers.getDefaultProvider(network)

// tansaction sender private key
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

// creating a wallet instance
const wallet = new ethers.Wallet(privateKey, provider)

// creating contract instance
const contract = new ethers.Contract(contractAddr, contractAbi, wallet)

// Receiver address which receives ether
const receiverAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"

// ether amount to send
const amount = "1"

// Create a transaction object
// const tx = {
//     to: receiverAddress,
//     value: ethers.utils.parseEther(amount)
// }

// send a transaction
// wallet.sendTransaction(tx)
//     .then((txObj) => {
//         console.log("TxHash", txObj.hash)
//     })

cron.schedule("*/1 * * * *", async () => {
    // wallet.sendTransaction(tx)
    //     .then((txObj) => {
    //         console.log("TxHash", txObj.hash)
    //     })
    // const name = await contract.functions.name()
    // console.log(name)
    const value = ethers.utils.parseEther(amount)
    const tx = await contract.functions.transfer(receiverAddress, value)
    console.log(tx)
})