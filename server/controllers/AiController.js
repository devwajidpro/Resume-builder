import ai from "../configs/ai";


// controller for enhacing a resume's professional summary

// POST: /api/ai/enhance-pro-sm

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        
        const {userContent} = req.body;

        if(!userContent) {
            res.status(400).json({
                message: "Missing required fields"
            })
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {   role: "system",
                    content: "You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or something else." 
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        })


        const enhancedContent = response.choices[0].message.content;

        return res.status(200).json({
            enhancedContent
        })
        
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }    
}