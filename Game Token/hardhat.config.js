require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork:"localhost",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"
    },
    holesky:{
      url:`https://eth-holesky.g.alchemy.com/v2/${process.env.APIKEY}`,
      accounts:[process.env.PRIVATE_KEY]
    }
   
  }
};