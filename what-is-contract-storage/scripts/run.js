const hre = require("hardhat");
const readStorageAt = require('./readStorageAt');

async function main() {
  const Contract = await hre.ethers.getContractFactory("ExampleContract");
  const contract = await Contract.deploy();

  await readStorageAt(contract, 0);
  await readStorageAt(contract, 1);
  await readStorageAt(contract, 2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
