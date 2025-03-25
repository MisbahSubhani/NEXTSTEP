import { RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

// Change Password Handler
export const changePasswordHandler: RequestHandler = async (req: AuthRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { currentPassword, newPassword, userType } = req.body;

    if (!currentPassword || !newPassword || !userType) {
        return res.status(400).json({ message: "Current password, new password, and user type are required" });
    }

    if (currentPassword === newPassword) {
        return res.status(400).json({ message: "New password must be different from current password" });
    }

    try {
        // Use a type assertion to inform TypeScript about the expected type
        const userModel = userType === 'student' ? prisma.student : prisma.hR;

        //@ts-ignore
        const user = await userModel.findUnique({
            where: { id: req.user.userId }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        //@ts-ignore
        await userModel.update({
            where: { id: req.user.userId },
            data: { password: hashedPassword }
        });

        res.json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Password change error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
