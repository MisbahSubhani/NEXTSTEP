import { RequestHandler, Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

//@ts-ignore
export const getStudentProfile: RequestHandler = async (
    req: AuthRequest,
    res: Response
) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user?.userId },
            select: { id: true, name: true, email: true },
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const applyInternship: RequestHandler = async (
    req: AuthRequest,
    res: Response
) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { internshipId } = req.body;

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user.userId }
        })

        if (!user) return res.status(404).json({ message: "User not found" });

        const applied = await prisma.application.findFirst({
            where: { studentId: user.id, internshipId: internshipId }
        })

        if (applied) return res.status(400).json({ message: "Already applied" });

        await prisma.application.create({
            data: { studentId: user.id, internshipId: internshipId }
        });

        res.status(200).json({ message: "Successfully applied" });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const addToFavorite: RequestHandler = async (
    req: AuthRequest,
    res: Response
) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const { internshipId } = req.body;

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user?.userId },
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        const favorited = await prisma.favorite.findFirst({
            where: { studentId: user.id, internshipId: internshipId }
        })

        if (favorited) return res.status(400).json({ message: "Already favorited" });

        await prisma.favorite.create({
            data: { studentId: user.id, internshipId: internshipId }
        });

        res.status(200).json({ message: "Favorited!" });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const getAppliedInternships: RequestHandler = async (
    req: AuthRequest,
    res: Response
) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user.userId }
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        const appliedInternships = await prisma.application.findMany({
            where: { studentId: user.id },
            select: { internshipId: true }
        });

        const internshipIds = appliedInternships.map(app => app.internshipId);
        const internshipDetails = await getInternshipDetailsFromIds(internshipIds);

        res.status(200).json({ appliedInternships: internshipDetails });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

//@ts-ignore
export const getFavoriteInternships: RequestHandler = async (
    req: AuthRequest,
    res: Response
) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user.userId }
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        const favoriteInternships = await prisma.favorite.findMany({
            where: { studentId: user.id },
            select: { internshipId: true }
        });

        const internshipIds = favoriteInternships.map(fav => fav.internshipId);
        const internshipDetails = await getInternshipDetailsFromIds(internshipIds);

        res.status(200).json({ favoriteInternships: internshipDetails });
    } catch (error) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

async function getInternshipDetailsFromIds(internshipIds: string[]) {
    return await prisma.internships.findMany({
        where: { id: { in: internshipIds } } 
    });
}