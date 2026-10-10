
import resumeModel from "../models/Resume";


// controller for creating a new resume
// POST: /api/resumes/create


export const createResume = async (req, res) => {
    try {
        
        const userId = req.userId;
        const {title} = req.body;

        // create new resume

        const newResume = await resumeModel.create({
            userId,
            title,

        })


        return res.status(201).json({
            message: "Resume created successfully",
            resume: newResume
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



// controller for delete resume
// POST: /api/resumes/delete

export const deleteResume = async (req, res) => {
    try {
        
        const userId = req.userId;
        const {resumeId} = req.params;


        await resumeModel.findOneAndDelete({userId, _id: resumeId})


        return res.status(200).json({
            message: "Resume deleted successfully"
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}






// controller for getting resume by Id
// GET: /api/resumes/get


export const getResumeById = async (req, res) => {

    try {
        
        const userId = req.userId;
        const {resumeId} = req.params;


        const resume = await resumeModel.findOne({userId, _id: resumeId})

        if(!resume) {
            return res.status(404).json({
            message: "Resume not found"
        }) 
        }

        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;

        return res.status(200).json({
            resume
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    
}


// controller for getting resume by Id Public
// GET: /api/resumes/public

export const getPublicResumeById = async (req, res) => {
   try {
        
        const {resumeId} = req.params;


        const resume = await resumeModel.findOne({public: true, _id: resumeId})

        if(!resume) {
            return res.status(404).json({
            message: "Resume not found"
        }) 
        }


        return res.status(200).json({
            resume
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}





// controller for update resume
// PUT: /api/resumes/update

export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId, resumeData, removeBackground} = req.body;
        const image = req.file;

        let resumeDataCopy = JSON.parse(resumeData)

        const resume = await resumeModel.findOneAndUpdate({userId, _id: resumeId}, resumeDataCopy, {new: true})


        return res.status(200).json({
            message: "saved successfully",
            resume
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}