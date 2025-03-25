// controllers/hrController.ts
import { Request, RequestHandler, Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

//@ts-ignore
export const postInternship:RequestHandler = async (req: AuthRequest, res: Response) => {
    const { company_name, position, location, stipend, duration, starting_date, is_immediate } = req.body;

    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const internship = await prisma.internships.create({
            data: {
                company_name,
                position,
                location,
                stipend,
                duration,
                starting_date,
                is_immediate,
                hr: { connect: { id: req.user.userId } },
            },
        });

        res.status(201).json({ message: "Internship created successfully", internship });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const deleteInternship:RequestHandler = async (req: AuthRequest, res: Response) => {
    const { internshipId } = req.body;

    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const internship = await prisma.internships.findUnique({
            where: { id: internshipId },
        });

        if (!internship) {
            return res.status(404).json({ message: "Internship not found" });
        }

        if (internship.hrId !== req.user.userId) {
            return res.status(403).json({ message: "You are not authorized to delete this internship" });
        }

        await prisma.internships.delete({
            where: { id: internshipId },
        });

        res.json({ message: "Internship deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const getHRProfile:RequestHandler = async (req: AuthRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const user = await prisma.hR.findUnique({
            where: { id: req.user?.userId },
            select: { id: true, name: true, email: true },
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};
