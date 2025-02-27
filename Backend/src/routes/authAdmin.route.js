import express from "express";
import { adminLogout, adminSignup, checkAdminAuth, adminLogin } from "../controllers/adminAuth.controller.js";
import { authenticateAdminSignup, authenticateAdminLogin } from "../middleware/authAdmin.middlewear.js";

const adminRouter = express.Router()

adminRouter.post("/admin-signup", authenticateAdminSignup, adminSignup);

adminRouter.post("/admin-login", authenticateAdminLogin, adminLogin);

adminRouter.get("/admin-logout", adminLogout);

adminRouter.get("/admin-check", checkAdminAuth);

export default adminRouter;