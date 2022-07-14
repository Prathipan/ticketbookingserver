import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import moviesRoute from "./routes/movies.js"
import theaterRoute from "./routes/theater.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongoDB")
      } catch (error) {
        throw error;
      }
}

mongoose.connection.on("disconnected" , () => {
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected" , () => {
    console.log("mongoDB connected")
})

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/movies" , moviesRoute);
app.use("/api/theater" , theaterRoute);
app.use("/api/users" , usersRoute);

app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500 
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success : false ,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    });
})

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    connect();
    console.log(`connected to backend PORT `)
})