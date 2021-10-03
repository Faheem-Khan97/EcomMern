const express = require('express');
const products = require('./data/products')

const app = express();
const port  = 5000;



app.get('/api/products', (req,res) => {
    
    res.json(products);
});

app.get('/api/products/:id', (req,res) => {
    const product = products.find(product => product._id == req.params.id)
    console.log(product)
    res.json(product);
});

app.listen(port, "localhost", () => {
    console.log("Server has started on port " + port)
});