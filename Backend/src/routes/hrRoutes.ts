// routes/hrRoutes.ts
import express from "express";
import { postInternship, deleteInternship, getHRProfile } from "../controllers/hrController";
import { authenticateUser, isHR } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/hr/postInternship", authenticateUser, isHR, postInternship);
router.delete("/hr/deleteInternship", authenticateUser, isHR, deleteInternship);
router.get("/hr/profile", authenticateUser, isHR, getHRProfile);

export default router;
