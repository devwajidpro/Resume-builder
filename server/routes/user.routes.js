
import express from 'express';
import { getUserById, loginUser, registerUser } from '../controllers/UserController.js';
import authMiddleware from "../middlewares/authMiddleware.js"


const router = express.Router()


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/data",authMiddleware, getUserById);



export default router;