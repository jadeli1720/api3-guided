const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to /suppliers/')
})

router.get('/:name', (req, res) => {
    const { name } = req.body
    res.send(`get to /suppliers/${name}`)
})

module.exports=router