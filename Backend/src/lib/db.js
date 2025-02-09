import mongoose from "mongoose"
export const connectDB = async (connectionURL) => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected ", conn.connection.host)
    } catch (error) {
        console.log("Error in ConnectDB function")
    }
}

