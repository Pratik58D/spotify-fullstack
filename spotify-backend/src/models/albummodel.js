import mongoose, { model } from "mongoose";

const albumSchema = new mongoose.Schema({
    name :{type:String,required:true},
    desc :{type:String,required:true},
    bgColour :{type:String,required:true},
    image :{type:String,required:true},
});

// Check if the "Album" model already exists, otherwise define it
const albumModel = mongoose.models.Album || mongoose.model("Album",albumSchema);

export default albumModel;