import express from 'express'
import products from './data/products.js'
import dEnv from 'dotenv';
import connectDB from './config/db.js'
dEnv.config();

const app = express();
const PORT  = process.env.PORT ||  5000;

connectDB();

app.get('/api/products', (req,res) => {
    
    res.json(products);
});

app.get('/api/products/:id', (req,res) => {
    const product = products.find(product => product._id == req.params.id)
    console.log(product)
    res.json(product);
});

app.listen(PORT, "localhost", () => {
    console.log("Server has started on port " + PORT)
});