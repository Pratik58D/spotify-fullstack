import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songroute.js";
import connectDb from "./src/config/db.js";
import connectClaudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";


//app config

const app = express();
const port = process.env.PORT || 4020;

//database config
connectDb();
connectClaudinary();

//middleware
app.use(express.json());
app.use(cors());

//intializing routes
app.use("/api/song",songRouter)
app.use("/api/album",albumRouter)

app.get("/",(req,res)=>{
    res.send("music is working")
})



app.listen(port,() =>console.log(`server is running ${port} `))

