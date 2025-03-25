import express from "express";
import { changePasswordHandler } from "../controllers/profileController";
import { authenticateUser, isHR } from "../middlewares/authMiddleware";

const router = express.Router();

// Change Password Routes
router.post("/student/changePassword", authenticateUser, (req, res, next) => {
    req.body.userType = 'student';
    next();
}, changePasswordHandler);

router.post("/hr/changePassword", authenticateUser, isHR,(req, res, next) => {
    req.body.userType = 'hR';
    next();
}, changePasswordHandler);

export default router;
