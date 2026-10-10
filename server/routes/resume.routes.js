import express from 'express';
import { createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from '../controllers/ResumeController.js';
import authMiddleware from "../middlewares/authMiddleware.js"
import upload from '../configs/multer.js';



const router = express.Router();


router.post("/create",authMiddleware, createResume);
router.delete("/delete/:resumeId", authMiddleware, deleteResume);
router.get("/get/:resumeId", authMiddleware, getResumeById);
router.get("/public/:resumeId", getPublicResumeById);
router.put("/update", upload.single("image"),authMiddleware, updateResume);




export default router;