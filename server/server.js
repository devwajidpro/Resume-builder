
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js"
import 'dotenv/config'
import authRoutes from './routes/user.routes.js'
import resumeRoutes from './routes/resume.routes.js'



const app = express();
const PORT = process.env.PORT || 3000;


await connectDB();


app.use(express.json());
app.use(cors());


app.use("/api/users", authRoutes);
app.use("/api/resumes", resumeRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
