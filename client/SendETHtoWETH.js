const { ethers } = require('ethers');
const customEnv = require('../config/custom-environment-variables.js');

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  'https://eth-rinkeby.alchemyapi.io/v2/-NSADGfcdjE454sGbGFFDwMK4x2skT0E'
);

// CREATE SIGNER
const myAddress = '0x40102ef2065170C018bB19cC6329D40c4078F22f';
const privateKey = customEnv.privateKey;

console.log(privateKey);
