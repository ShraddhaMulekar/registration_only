import mongoose from "mongoose";

const LogOutSchema = new mongoose.Schema({
    token : {type:String, required:true},
    Date : {type:Date, default:Date.now()}
}, {
    versionKey:false
})

const LogOutModel = mongoose.model("logOut", LogOutSchema)

export default LogOutModel