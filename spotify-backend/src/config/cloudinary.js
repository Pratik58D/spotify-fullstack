import {v2 as cloudnary} from "cloudinary";

const connectClaudinary = async()=>{
    try {
        await cloudnary.config({
            cloud_name : process.env.CLODINARY_NAME,
            api_key : process.env.CLODINARY_API_KEY,
            api_secret : process.env.CLODINARY_SECRET_KEY
        })
        
    } catch (error) {
        console.log("error in clodinary conenction",error)
        
    }
}

export default connectClaudinary;