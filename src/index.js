const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server")

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const urldb = "mongodb://admin:123456@127.0.0.1/admin";
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>console.log(`Servidor on-line em ${url}`))
.catch((erro)=>console.error(`Erro ao executar o servidor -> ${erro}`))