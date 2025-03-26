// routes/studentRoutes.ts
import express from "express";
import { addToFavorite, applyInternship, getAppliedInternships, getStudentProfile, getFavoriteInternships} from "../controllers/studentController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/student/profile", authenticateUser, getStudentProfile);
router.post("/student/applyInternship", authenticateUser, applyInternship);
router.post("/student/favorite", authenticateUser, addToFavorite);
router.get("/student/getAppliedInternships",authenticateUser, getAppliedInternships)
router.get("/student/getFavoriteInternships",authenticateUser, getFavoriteInternships)

export default router;
