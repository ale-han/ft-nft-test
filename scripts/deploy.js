//deploy.js
const hre = require("hardhat");
async function main() {
  // ethers is avaialble in the global scope
  const [deployer] = await hre.ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Notepad = await hre.ethers.getContractFactory("Notepad");
  const notepad = await Notepad.deploy();
  await notepad.deployed();

  console.log("Token address:", notepad.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
