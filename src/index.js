//Criando o index.js
//Criação de uma aplicação express
const express = require('express'); //importando express
const req = require('express/lib/request');
const res = require('express/lib/response');
const { request } = require('http');

const path = require('path'); //Importando path
const { REPL_MODE_SLOPPY } = require('repl');
//O path retorna o caminho de forma dinamica

const app = express();
//O app irá receber o express e todas suas dependencias

const router = express.Router()
//Isso permite que a gente crie diferentes urls e endpoints para que o frontend possa fazer chamadas

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
//Aqui definimos nossa rota para o arquivo html usando o path para sempre retornar dinamicamente o vem antes da "/pages/home.html"
//Tudo que se encontra depois da barra "/" serão nossas rotas.

app.use(router);
//Após declarar nossas rotas, aqui falamos para nosso app usar elas como referência 

app.listen(3333, ()=>{
    console.log('Servidor Rodando')
})
   //Aqui definimos quem irá escutar nosso chamado e nos responder
   
   app.get('/helo', (req, res) => {
      console.log('Get Funcionando');
      res.send({ mensage: 'Hello Word !!!'});
   })

   /*Dentro do get ja definimos uma função anônima Callback,
   que recebe uma requisição com o Request e que retorna  uma resposta com o reply */

   app.get('/usuario', (req,res)=>{
    console.log('Get Usuario Funcionado');
    res.send({usuario:'Luciano'})
   })
   