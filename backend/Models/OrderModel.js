import mongoose, { Model } from 'mongoose'


const itemSchema = mongoose.Schema({
    name:{ type:String, required:true },
    qty:{ type:Number, required:true },
    image:{ type:String, required:true },
    price:{ type:Number, required:true },
    product:{ type:mongoose.Schema.Types.ObjectID, required:true , ref:"Product" },
   
})

const OrderSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.TyPes.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems:[itemSchema],

    shippingAddress:{
        address:{ type:String, required:true },
        city:{ type:String, required:true },
        postalCode:{ type:Number, required:true },
        country:{ type:String, required:true },
    }
    ,
    paymentMethod:{
        type:String,
        required:true,
    },

    paymentResult:{
        id:{ type: String, required:true },
        status:{ type: String, required:true },
        update_time:{ type: String, required:true },
        email_address:{ type: String, required:true },
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        required:true,
        dafault:false,
    },

    paidAt:{ type:Date },

    isDelivered:{
        type:Boolean,
        required:true,
        dafault:false,
    },

    deliverAt:{ type:Date},

    
}, {
    timestamps:true
})

const Order = mongoose.model('Order', OrderSchema)

export default Order