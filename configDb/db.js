import mongoose from "mongoose";

const dbConnected = async()=>{
    await mongoose.connect(process.env.DBURL)
    console.log("DB connected!")
}

export default dbConnected