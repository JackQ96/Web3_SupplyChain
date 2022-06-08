const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/bdf45240d0494177861507a522e08327`),
        network_id: 4,       // Ropsten's id
        gas: 5000000,        // Ropsten has a lower block limit than mainnet
        gasPrice: 10000000000,
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
        // Set default mocha options here, use special reporters etc.
        mocha: {
          // timeout: 100000
        },
  },
  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
};