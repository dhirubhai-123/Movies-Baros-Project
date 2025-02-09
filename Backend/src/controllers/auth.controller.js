import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email: email,
            fullName: fullName,
            password: hashedPassword,
        });

        // Save the new user
        if (newUser) {
            // Generating the JWT Token
            // generateToken(newUser._id, res)
            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ message: "Invalid User Data" })
        }


    } catch (error) {
        console.log("Internal Server Error !")
        return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            console.log("User doesn't exist!", email);
            return res.status(400).json({ message: `This user doesn't exist in our database: ${email}` });
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);

        if (!isPasswordEqual) {
            return res.status(400).json({ message: `email or password is wrong ${email}` });
        }

        // So the user already exists we are good to generate the token and set cookie
        const token = generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
            token: token
        });

    } catch (error) {
        console.log("Internal Server Error, auth.controller!");
        return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};


export const logout = (req, res) => {
    try {
        res.clearCookie('jwt');
        return res.status(200).json({ message: 'Logged out successfully', user: req.user });
    } catch (error) {
        console.log('Error in logout controller:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};



export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

