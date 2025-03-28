import express from "express";
import { getInternships } from "../controllers/internshipController"

const router = express.Router();

// Change Password Routes
router.get("/getinternships", getInternships);

export default router;
