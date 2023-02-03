const hre = require("hardhat");

async function readStorageAt(contract, position) {
  console.log(await hre.ethers.provider.getStorageAt(contract.address, position));
}

module.exports = readStorageAt;