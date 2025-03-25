// routes/authRoutes.ts
import express from "express";
import { studentSignup, hrSignup, studentLogin, hrLogin } from "../controllers/authController";

const router = express.Router();

router.post("/student/signup", studentSignup);
router.post("/hr/signup", hrSignup);
router.post("/student/login", studentLogin);
router.post("/hr/login", hrLogin);

export default router;
