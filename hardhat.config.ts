import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/tjnpc3IG2Xi4BAADo_5yhGAMNQhT7hCj",
      accounts: [
        "0xf3702dc85086331b00314c354827183815d82db812e3ecd523b2953d1279306f",
      ],
    },
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

export default config;
