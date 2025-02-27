import Admin from "../models/admin.model.js"
import bcrypt from "bcryptjs";
import { generateAdminToken } from "../lib/utils.js";

export const adminSignup = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;

        if (!email || !password || !fullName) {
            return res.status(400).json({ message: `wrong data provided` });
        }

        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            email: email,
            fullName: fullName,
            password: hashedPassword,
        });

        // Save the new user
        if (newAdmin) {
            // Generating the JWT Token
            // generateToken(newUser._id, res)
            await newAdmin.save();

            res.status(200).json({
                _id: newAdmin._id,
                fullName: newAdmin.fullName,
                email: newAdmin.email,
                success: true,
            });
        } else {
            res.status(400).json({ message: "Invalid User Data", success: false })
        }


    } catch (error) {
        console.log("Internal Server Error !")
        return res.status(500).json({ message: `Internal Server Error: ${error.message}`, success: false });
    }
};


export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: `wrong data provided` });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            console.log("User doesn't exist!", email);
            return res.status(400).json({ message: `This user doesn't exist in our database: ${email}` });
        }

        const isPasswordEqual = await bcrypt.compare(password, admin.password);

        if (!isPasswordEqual) {
            return res.status(400).json({ message: `email or password is wrong ${email}` });
        }

        // So the user already exists we are good to generate the token and set cookie
        const adminToken = generateAdminToken(admin._id, res);
        res.status(200).json({
            _id: admin._id,
            fullName: admin.fullName,
            email: admin.email,
            token: adminToken,
            success: true,
        });

    } catch (error) {
        console.log("Internal Server Error, auth.controller!");
        return res.status(500).json({ message: `Internal Server Error: ${error.message}`, success: false });
    }
};


export const adminLogout = (req, res) => {
    try {
        res.clearCookie('adminJWT');
        return res.status(200).json({ message: 'Logged out successfully', success: true });
    } catch (error) {
        console.log('Error in logout controller:', error.message);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

export const checkAdminAuth = (req, res) => {
    try {
        res.status(200).json(req.admin);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};