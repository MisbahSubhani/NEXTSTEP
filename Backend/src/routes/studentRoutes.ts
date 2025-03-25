// routes/studentRoutes.ts
import express from "express";
import { getStudentProfile } from "../controllers/studentController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/student/profile", authenticateUser, getStudentProfile);

export default router;
