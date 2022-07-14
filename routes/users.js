import express, { application } from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

 //check token verification 
// router.get("/authentication" , verifyToken , (req,res,next)=>{
//     res.send("you are logged in");
// })


//UPDATE
router.put("/:id" ,verifyUser, updateUser);
// DELETE
router.delete("/:id" , verifyUser , deleteUser);
//GET
router.get("/:id", verifyUser , getUser);
//GET ALL
router.get("/" ,verifyAdmin, getAllUsers);



export default router;