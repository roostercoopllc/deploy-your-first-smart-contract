// import abi 
const myFirstContract = require("../build/contracts/MyFirstContract.json");
const { ethers } = require("ethers");

// Set Provider
const rpc = 'http://localhost:9545';
const provider = new ethers.JsonRpcProvider(rpc);
const signer = new ethers.Wallet("WALLET_PRIVATE_KEY", provider);

// set the contract address
const contractAddress = '0x4dE1461E8BB06589c61578fBCc19f0b7414D2755';

// Contract Instance
const contractInstance = new ethers.Contract(contractAddress, myFirstContract.abi, signer);

// For view function
var result = 0;
const fundToAdd = 100;
contractInstance.addFunds(fundToAdd)
  .then((res) => {
    result = res;
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
console.log("\nThe current amount in the bank account is: " + result);
