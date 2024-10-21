import multer, { diskStorage } from "multer";

// Define the storage configuration
const storage = multer.diskStorage({
    filename : function (req,file,callback){
        // Define how the file's name will be saved
        callback(null,file.originalname)
    }
})

// Create an instance of multer with the defined storage configuration
const upload  = multer({storage})

export default upload;