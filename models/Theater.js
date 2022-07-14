import mongoose from "mongoose"

const TheaterSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    screens : {
        type: [String],
    },
    city : {
        type: String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    rating:{
        type:Number,
        min :  0,
        max: 5
    }
});

export default mongoose.model("Theater" , TheaterSchema);