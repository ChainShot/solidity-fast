const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("ExampleContract");
  const contract = await Contract.deploy();
  
  console.log( await contract.x() );
  console.log( await contract.y() );
  console.log( await contract.z() );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
