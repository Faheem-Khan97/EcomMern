import mongoose from 'mongoose';


const connect = async () => {
    try {
        const con = await mongoose.connect(process.env.connectionString, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });

        console.log(`Database connected on ${con.connection.host}`)

    } catch (error) {
        console.log("Error:" + error.message);
        process.exit(1);
        
    }
    

}

export default connect