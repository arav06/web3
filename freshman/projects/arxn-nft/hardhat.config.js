require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const quicknode = process.env.HTTP_URL;
const privateKey = process.env.PRIVATE;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: quicknode,
      accounts: [privateKey],
    },
  },
};
