import mongoose from "mongoose";

const userAdmin = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},

    { timestamps: true }
)

const Admin = mongoose.model("Admin", userAdmin)

export default Admin;