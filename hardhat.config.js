require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  hardhat: {},
  sepolia: {
    url: process.env.ETH_SEPOLIA_NODE_URL,
    accounts: `0x${process.env.PRIVATE_KEY}`,
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
