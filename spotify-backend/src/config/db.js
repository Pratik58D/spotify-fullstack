import mongoose from "mongoose";

const connectDb = async() =>{
    const mongouri = `${process.env.MONGOODB_URI}/spotify`
    try {
        const conn = await mongoose.connect(mongouri);
        console.log(`database connected ${conn.connection.host} `)
        
    } catch (error) {
        console.log("database connecton error",error);
        
    }
}

export default connectDb;