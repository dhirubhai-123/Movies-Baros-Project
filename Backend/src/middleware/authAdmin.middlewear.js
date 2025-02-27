import Joi from "joi";
import jwt from "jsonwebtoken";
import pkg from 'jsonwebtoken';
const { verify } = pkg;

export const authenticateAdminSignup = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        fullName: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(8).required()
    })

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Incoming Data is wrong", success: false })
    }

    next();
}

export const authenticateAdminLogin = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        fullName: Joi.string().min(3).max(50),
        password: Joi.string().min(8).required()
    });

    const { error } = Schema.validate(req.body);

    if (error) {
        console.log(req.body, "authenticateLogin middlewear")
        return res.status(400).json({ message: "Incoming Data is wrong" })
    }

    next();
}