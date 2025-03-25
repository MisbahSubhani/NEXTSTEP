import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";

export interface AuthRequest extends Request {
    user?: { userId: string };
}

const JWT_SECRET = process.env.JWT_SECRET!;

//@ts-ignore
export const authenticateUser: RequestHandler = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization; // Extract the token part

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        req.user = { userId: decoded.userId };
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};

//@ts-ignore
export const isHR: RequestHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const hrUser = await prisma.hR.findUnique({ where: { id: req.user.userId } });
        if (!hrUser) return res.status(403).json({ message: "Access denied" });

        next();
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};