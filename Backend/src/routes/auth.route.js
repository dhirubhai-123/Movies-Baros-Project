import express from "express";
import { checkAuth, login, logout, signup } from "../controllers/auth.controller.js";
import { authenticateLogin, authenticateSignup, protectRoute } from "../middleware/auth.middlewear.js";

const router = express.Router()

router.post("/signup", authenticateSignup, signup)

router.post("/login", authenticateLogin, login)

router.get("/logout", protectRoute, logout)

router.get("/check", checkAuth)

export default router;