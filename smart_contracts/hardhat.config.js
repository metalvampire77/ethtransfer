// https://eth-ropsten.alchemyapi.io/v2/-MN-77-V4r-Eio8Xj5p8xmh9vDSpX7mW

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-MN-77-V4r-Eio8Xj5p8xmh9vDSpX7mW',
      accounts: ['5b31c56752bcb6c5ca0acfa2c643e385f395053f61496f6b4c67932654dd3a4b'],
    },
  },
};