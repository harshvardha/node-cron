const contractABI = require("./contractsData/Basic.json")
const contractAddress = require("./contractsData/Basic-address.json")

const contractAbi = contractABI.abi
const contractAddr = contractAddress.address

module.exports = { contractAbi, contractAddr }