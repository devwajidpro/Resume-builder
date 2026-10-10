import express from 'express';
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from '../controllers/AiController.js';
import authMiddleware from '../middlewares/authMiddleware.js'


const router = express.Router();


router.post("/enhance-pro-sm", authMiddleware, enhanceProfessionalSummary);
router.post("/enhance-job-desc", authMiddleware, enhanceJobDescription);
router.post("/upload-resume", authMiddleware, uploadResume)




export default router;