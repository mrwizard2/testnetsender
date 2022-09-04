const { ethers } = require('ethers');
const customEnv = require('../config/custom-environment-variables.js');

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  'https://eth-rinkeby.alchemyapi.io/v2/-NSADGfcdjE454sGbGFFDwMK4x2skT0E'
);

// CREATE SIGNER
const myAddress = '0x40102ef2065170C018bB19cC6329D40c4078F22f';
const privateKey = customEnv.privateKey;
const walletSigner = new ethers.Wallet(privateKey, providerTestnet)

const exchangeETH = async () => {
  const sendValueHuman = '0.05';
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 0; // web3.eth.getTransactionCount(myAddress)
  const txBuild = {
    from: myAddress, // from,
    to: '0xDf032Bc4B9dC2782Bb09352007D4C57B75160B15', // to (WETH on Rinkeby Test Network),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);

  console.log('');
  console.log('TX SEND');
  console.log(txSend);

};

exchangeETH();