const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    //Local ganache-cli
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*" // Any network (default: none)
    },

    // Rinkeby Testnet
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY
        ),
      network_id: 4,
      gas: 3000000,
      gasPrice: 10000000000 //10 gwei
    },

    // main ethereum network(mainnet)
    main: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY
        ),
      network_id: 1,
      gas: 3000000,
      gasPrice: 10000000000 //10 gwei
    }
  },

  // Configure your compiler
  compilers: {
    solc: {
      version: "0.5.0", // Fetch exact version when running command "truffle version"
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};
