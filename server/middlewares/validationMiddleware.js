import {body, validationResult} from 'express-validator';

async function validateResult(req, res, next) {
    const errors = validationResult(req)


if (!errors.isEmpty()) {
    return res.status(400).json({
        message: errors.array()[0].msg,
        errors: errors.array()
    });
}

    next();
    
}


const registerUserValidationRules = [
    
    body('name')
        .isString()
        .withMessage('Username must be a string')
        .isLength({min:3, max:20})
        .withMessage("Username must be between 3 to 20 characters"),


    body('email')
        .isEmail()
        .withMessage('Invalid email address'),

    body('password')
        .isLength({min:6})
        .withMessage("Password must be atleast 6 characters long"),


    validateResult
]


const loginUserValidationRules = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),

    body('password')
        .isLength({min:6})
        .withMessage("Password must be atleast 6 characters long"),


    validateResult
]



export {registerUserValidationRules, loginUserValidationRules};