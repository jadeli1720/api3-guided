const express = require('express');
const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-routers');

const server = express();

//global middleware: --> All middleware will run in the order it is called
server.use(express.json());//---> parse and turn into javascript object
// server.use(uppercaser); //using custom middleware globally

//we can use middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

//route handlers ---> this is just middleware and can also  modify the request or response objects as well
server.get('/', (req, res) => {
    res.status(200).json({api: 'up'})
})


server.get('/clients', (req, res) => {
    
});

//export default server;
module.exports = server;