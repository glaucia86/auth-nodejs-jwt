/*

Arquivo: usuario.js
Data: 12/04/2017
Author: Glaucia Lemos
Observação: arquivo responsável por definir o modelo do 'Usuario' com a base de dados.

*/

//Aqui iremos pegar a instância do mongoose:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Aqui iremos configura um modelo e depois usar o module.exports:
module.exports = mongoose.model('Usuario', new Schema({
        nome: String,
        senha: String,
        admin: Boolean
}));