// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const fs = require("fs")

async function main() {
  const [owner] = await ethers.getSigners()
  const BasicContract = await ethers.getContractFactory("Basic")
  const basicContract = await BasicContract.deploy()
  await basicContract.deployed()
  saveContractsData(basicContract, "Basic")
}

function saveContractsData(contract, name) {
  const contractDir = "E:/javascript-practice/node-cron/basic/contractsData"
  if (!fs.existsSync(contractDir)) {
    fs.mkdirSync(contractDir)
  }
  fs.writeFileSync(
    contractDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  )
  if (name !== "owner") {
    const contractArtifact = artifacts.readArtifactSync(name)
    fs.writeFileSync(
      contractDir + `/${name}.json`,
      JSON.stringify(contractArtifact, null, 2)
    )
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
