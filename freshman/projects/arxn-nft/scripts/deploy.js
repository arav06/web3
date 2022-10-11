const { ethers } = require("hardhat");

async function deployNFT(){
  const smartContract = await ethers.getContractFactory("myNFT");
  const deployNFT = await smartContract.deploy("The Arav NFT Pair","ARXP");
  await deployNFT.deployed();
  console.log(deployNFT.address);
}

deployNFT().then(
  () => {
    console.log("Deployment Successful!");
    process.exit(0)
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
