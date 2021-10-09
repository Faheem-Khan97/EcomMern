import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import Order from './Models/OrderModel.js'
import User from './Models/UserModel.js'
import Product from './Models/ProductModel.js'
import connectDB from './config/db.js'

dotenv.config();

connectDB()
const importData = async () => {

    try {

        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        console.log(createdUsers);
        const admin = createdUsers[0]._id;

        const sampleProducts = products.map(p => ({...p, user:admin}));
        await Product.insertMany(sampleProducts);
        console.log("Data Imported")
        process.exit()
    } catch (error) {

        console.log(error.message);
        process.exit(1);
    }

}

const destroyData = async () => {
    try {
        
    

        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("Data Destroyed")
        process.exit()

    } catch (error) {

        console.log(error.message);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}