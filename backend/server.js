import express from 'express'
import products from './data/products.js'
import dEnv from 'dotenv';
import connectDB from './config/db.js'
import productRouter from './routes/productRoute.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
dEnv.config();

const app = express();
const PORT  = process.env.PORT ||  5000;

connectDB();

app.use('/api/products', productRouter)

app.use(notFound);

app.use(errorHandler)

app.listen(PORT, "localhost", () => {
    console.log("Server has started on port " + PORT)
});