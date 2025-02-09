import Joi from "joi";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import pkg from 'jsonwebtoken';
const { verify } = pkg;

export const authenticateSignup = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        fullName: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(6).required()
    })

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Incoming Data is wrong", success: false })
    }

    next();
}

export const authenticateLogin = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().min(5).max(50).required(),
        fullName: Joi.string().min(3).max(50),
        password: Joi.string().min(6).required()
    });


    const { error } = Schema.validate(req.body);

    if (error) {
        console.log(req.body, "authenticateLogin middlewear")
        return res.status(400).json({ message: "Incoming Data is wrong" })
    }

    next();
}

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "No token / Authorized Token Found !!" });
        }

        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store the decoded user information in the request object
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
