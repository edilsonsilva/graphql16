const {gql} = require("apollo-server");

const query = gql `
    type Query{ 
        produtos:[Produto]
        produto(id:ID!):Produto
    }
`;
module.exports = query;

