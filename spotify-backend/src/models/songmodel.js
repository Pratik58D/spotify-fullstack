import mongoose from "mongoose";


const songSchema = new mongoose.Schema({
    name :{type:String,required:true},
    desc :{type:String,required:true},
    album :{type:String,required:true},
    image :{type:String,required:true},
    file :{type:String,required:true},
    duration :{type:String,required:true},
});

// Check if the "Song" model already exists, otherwise define it
const SongModel = mongoose.models.Song || mongoose.model("Song",songSchema);


export default SongModel;