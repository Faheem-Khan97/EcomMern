import mongoose, { Model } from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    rating:{
        type:String,
        required:true,
       
    },
}, {timestamps:true})

const ProductSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.TyPes.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true,

    },
    brand:{
        type:String,
        required:true,
    }
    ,
    category:{
        type:String,
        required:true,
    },
    image:{
        type:Boolean,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },

    reviews: [reviewSchema],

    numOfReviews:{
        type:String,
        required:true,
        default:0
    },
    stock:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true,
    }
}, {
    timestamps:true
})

const Product = mongoose.model('Product', ProductSchema)

export default Product