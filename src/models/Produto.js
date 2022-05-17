const mongoose = require("mongoose");
const ProdutoSchema = mongoose.Schema({
    nome:String,
    descricao:String,
    preco:String,
    fornecedor:{
        razaosocial:String,
        cnpj:String,
    }
});
module.exports = mongoose.model("Produto",ProdutoSchema);