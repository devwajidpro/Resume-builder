
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js"
import 'dotenv/config'



const app = express();
const PORT = process.env.PORT || 3000;


await connectDB();


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => res.send("Server is live..."))




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
