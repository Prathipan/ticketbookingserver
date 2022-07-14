import Theater from "../models/Theater.js";


export const createTheater =  async (req,res,next) => {
    const newTheater = new Theater(req.body)

    try{
       const savedTheater = await newTheater.save();
       res.status(200).json(savedTheater);
    }catch(err){
        next(err);
    }
}

export const updateTheater =  async (req,res,next) => {
    try{
        const updatedTheater = await Theater.findByIdAndUpdate(req.params.id , {$set: req.body} , {new:true})
       res.status(200).json(updatedTheater);
    }catch(err){
        next(err);
    }
}

export const deleteTheater =  async (req,res,next) => {
    try{
        Theater.findByIdAndDelete(req.params.id);
       res.status(200).json("Theater has been deleted");
    }catch(err){
       next(err);
    }
}

export const getTheater =  async (req,res,next) => {
    try{
        const theater = await Theater.findById(req.params.id);
        res.status(200).json(theater);
    }catch(err){
        next(err);
    }
}

export const getAllTheaters =  async (req,res,next) => {
    try{
        const Theaters = await Theater.find();
       res.status(200).json(Theaters);
    }catch(err){
        next(err)
    }
}