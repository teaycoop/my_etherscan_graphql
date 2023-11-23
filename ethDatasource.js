// Import Apollo REST data source  
// This allows us to create a REST data source using Apollo conventions
const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum address to query
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan data source class
// Extends the Apollo RESTDataSource to integrate with the Etherscan API
class EtherDataSource extends RESTDataSource {

  // Set base URL for Etherscan API 
  // Constructor sets the base URL to the Etherscan API endpoint
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";  
  }

  // Get ETH balance for an address
  async etherBalanceByAddress() {
    // Calls Etherscan API to get the ETH balance for the address
  }
  
  // Get total ETH supply
  async totalSupplyOfEther() {
    // Calls Etherscan API to get total ETH supply
  }

  // Get latest ETH price
  async getLatestEthereumPrice() {
    // Calls Etherscan API to get current ETH price
  }

  // Get block confirmation time estimate
  async getBlockConfirmationTime() {
    // Calls Etherscan API to get block confirmation time estimate
  }
}

module.exports = EtherDataSource;
