// example from https://docs.chain.link/data-feeds/using-data-feeds
const { ethers } = require("ethers") // for nodejs only
const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth_sepolia")
const aggV3Abi = require("./external/aggregatorV3InterfaceAbi.json");

/*
The contract locations on sepolia to get round data.  
// Link:ETH - 0x42585eD362B3f1BCa95c640FdFf35Ef899212734
// Link:USD - 0xc59E3633BAAC79493d908e63626716e204A45EdF
// ETH:USD 0x694AA1769357215DE4FAC081bf1f309aDC325306
*/
const addr = "0xc59E3633BAAC79493d908e63626716e204A45EdF"
const priceFeed = new ethers.Contract(addr, aggV3Abi, provider)
priceFeed.latestRoundData().then((roundData) => {
  // Do something with roundData
  console.log("Latest Round Data", roundData)
})