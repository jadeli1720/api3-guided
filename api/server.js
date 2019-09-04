const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
})

//manage products (8) ----> the products, clients.....are all resources in RESTful API speak
//manage clients
//manage orders
//manage suppliers



server.get('/products', (req, res) => {
    
});

server.get('/clients', (req, res) => {
    
});

server.get('/clients', (req, res) => {
    
});


module.exports = server;