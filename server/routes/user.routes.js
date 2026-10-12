
import express from 'express';
import { getUserById, getUserResumes, loginUser, registerUser } from '../controllers/UserController.js';
import authMiddleware from "../middlewares/authMiddleware.js"
import { loginUserValidationRules, registerUserValidationRules } from '../middlewares/validationMiddleware.js';


const router = express.Router()


router.post("/register", registerUserValidationRules, registerUser);
router.post("/login",loginUserValidationRules, loginUser);
router.get("/data",authMiddleware, getUserById);
router.get("/resumes", authMiddleware, getUserResumes );



export default router;