const express = require('express');
const server = require('../products/products-router')

const server = express();

//global middleware:
server.use(express.json());//---> parse and turn into javascript object

server.use('/products', productRouter);
server.use('/suppliers', suppliersRouter);

//route handlers ---> this is just middleware and can also  modify the request or response objects as well
server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
})

//manage products (8) ----> the products, clients.....are all resources in RESTful API speak
//manage clients (8)
//manage orders
//manage suppliers


server.get('/clients', (req, res) => {
    
});

//export default server;
module.exports = server;