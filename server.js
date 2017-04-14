/*

Arquivo: server.js
Data: 13/04/2017
Observação: Arquivo principal e responsável por executar a nossa aplicação.
Author: Glaucia Lemos

*/

// Aqui estamos usando os pacotes instalados para o arquivo:
var express     = require('express');
var app         = express();

var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt     = require('jsonwebtoken'); //pacote usado para criar e verificar os tokens
var config  = require('./config'); //aqui estamos retornando a configuração criada nesse arquivo relacionado ao bd
var Usuario = require('./app/models/usuario'); //estamos retornando a classe de modelo 'Usuario'


var port = process.env.PORT || 8000; //aqui estamos configurando a porta da nossa api. Onde irá: criar e verificar os tokens tbm
mongoose.connect(config.database); //aqui iremos conectar a base de dados
app.set('superNode-auth', config.configName); //variável que criamos no arquivo 'config'

//Aqui estamos usando o 'body-parser' para obter as informações das requisições via POST (parâmetros)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//aqui estamos usando o 'morgan' para criar um log de requisições através do console de qualquer alteração que tivermos em nossa api:
app.use(morgan('dev'));

//Rota Padrão da API:
app.get('/', function(req, res) {
    res.send('Seja Bem-Vindo a API: http://localhost:' + port + '/api');
});

//Demais rotas:
app.get('/create', function(req, res){
    //Aqui iremos criar um usuário de exemplo - todas as vezes que formos usar essa rota aparecerá esse usuário
    var usuarioExemplo = new Usuario({
        nome: 'Glaucia Lemos',
        senha: 'senha123',
        admin: true
    });

    //Aqui estaremos salvando esse usuário de exemplo:
    usuarioExemplo.save(function(error) {
        if(error)
            throw error;

        console.log('Usuário Criado com Sucesso!');
            res.json({
               success: true 
            });
    });
});

//Iniciamos o server via node server.js
app.listen(port);
console.log('Aplicação sendo executada em http://locahost:' + port);
