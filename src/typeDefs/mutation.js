const {gql} = require("apollo-server");

const mutation = gql `
    type Mutation{
        createProduto(produto: ProdutoInput):Produto
        updateProduto(id:String, produto:ProdutoInput):Produto
        deleteProduto(id:String):Produto
    }
    input ProdutoInput{
        nome:String,
        descricao:String,
        preco:String,
        fornecedor:FornecedorInput
    }
    input FornecedorInput{
        razaosocial:String
        cnpj:String
    }
`;
module.exports = mutation;