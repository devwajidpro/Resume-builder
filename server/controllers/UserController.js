

import userModel from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});

    return token;
}

// controller for user registration
// POST: /api/users/register
export const registerUser = async (req, res) => {

    try {
        
        const {name, email, password} = req.body;

        // check if required fields are present 

        if(!name || !email || !password) {
            return res.status(400).json({
                message: "Missing required fields"
            })
        }

        // check if user already exist

        const user = userModel.findOne({
            email
        })

        if (user) {
            res.status(400).json({
                message: "User already exists"
            })
        }



        // Create user

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            name, 
            email,
            password: hashedPassword
        })

        const token = generateToken(newUser._id);
        newUser.password = undefined;


        res.status(201).json({
            message: "New user created successfully.",
            token,
            user: newUser
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    
}



// controller for user login
// POST: /api/users/login


export const loginUser = async (req, res) => {

    try {
        
        const {email, password} = req.body;

        // check if user exist

        const user = userModel.findOne({
            email
        })

        if (!user) {
            res.status(400).json({
                message: "Invalid email or password"
            })
        }


        // check if password is correct

        if (!user.comparePassword(password)) {
            res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const token = generateToken(user._id);
        user.password = undefined;


        res.status(200).json({
            message: "User login successfully.",
            token,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    
}