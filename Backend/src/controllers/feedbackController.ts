import { RequestHandler, Response } from "express";
import prisma from "../config/prisma";

//@ts-ignore
export const sendFeedback:RequestHandler = async (req: AuthRequest, res: Response) => {
    const { name, email, message } = req.body;

    try {
        await prisma.feedback.create({
            data: { name, email, message },
        })
        res.json({ message: "successful" })
    } catch (error) {
        res.json({ message: "error submitting feedback, please try again later" })
    }
}