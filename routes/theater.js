import express from "express"
import { createTheater, deleteTheater, getAllTheaters, getTheater, updateTheater } from "../controllers/theaterController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/" ,verifyAdmin, createTheater);
//UPDATE
router.put("/:id" ,verifyAdmin, updateTheater);
// DELETE
router.delete("/:id" ,verifyAdmin , deleteTheater);
//GET
router.get("/:id" ,verifyAdmin, getTheater);
//GET ALL
router.get("/" , getAllTheaters);

export default router;