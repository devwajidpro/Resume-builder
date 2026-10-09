
import express from 'express';
import { getUserById, getUserResumes, loginUser, registerUser } from '../controllers/UserController.js';
import authMiddleware from "../middlewares/authMiddleware.js"


const router = express.Router()


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/data",authMiddleware, getUserById);
router.get("/resumes", authMiddleware, getUserResumes );



export default router;