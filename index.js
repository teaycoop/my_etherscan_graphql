// Import Apollo Server and schema 
const { ApolloServer } = require("apollo-server");

// Import Apollo schema 
const { importSchema } = require("graphql-import");

// Import custom data source module
const EtherDataSource = require("./datasource/ethDatasource"); 

// Import GraphQL schema from schema file
const typeDefs = importSchema("./schema.graphql"); 

// Load environment variables from .env file
require("dotenv").config();

// Define root query resolvers
const resolvers = {
  Query: {
    // TODO: Implement resolver to get ether balance for address
    etherBalanceByAddress: () => {},
    
    // TODO: Implement resolver to get total ether supply    
    totalSupplyOfEther: () => {},  
    
    // TODO: Implement resolver to get latest ether price
    latestEthereumPrice: () => {},

    // TODO: Implement resolver to get average block confirmation time
    blockConfirmationTime: () => {},
  },
};

// Create Apollo Server instance and pass schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  
  // Pass custom data source to context
  dataSources: () => ({
    ethDataSource: new EtherDataSource(), 
  }), 
});

// Set no timeout and start server 
server.timeout = 0;
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); 
});
