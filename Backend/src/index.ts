require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;

interface AuthRequest extends Request {
    user?: { userId: string };
}

// Signup Route
//@ts-ignore
app.post("/student/signup", async (req: Request, res: Response) => {
    const { name, username, email, password } = req.body;

    try {
        const existingUser = await prisma.student.findUnique({ where: { email } });
        const existingUsername = await prisma.student.findUnique({ where: { username } });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });
        if (existingUsername) return res.status(400).json({ message: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.student.create({
            data: { name, email, username, password: hashedPassword },
        });

        res.status(201).json({ message: "User registered successfully", userId: user.id });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

//@ts-ignore
app.post("/hr/signup", async (req: Request, res: Response) => {
    const { name, username, email, password } = req.body;

    try {
        const existingUser = await prisma.hR.findUnique({ where: { email } });
        const existingUsername = await prisma.hR.findUnique({ where: { username } });

        if (existingUser) return res.status(400).json({ message: "Email already exists" });
        if (existingUsername) return res.status(400).json({ message: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.hR.create({
            data: { name, email, username, password: hashedPassword },
        });

        res.status(201).json({ message: "User registered successfully", userId: user.id });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

// Login Route
//@ts-ignore
app.post("/student/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.student.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ message: "Invalid email, please sign up" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Wrong password, please try again" });

        //@ts-ignore
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({ token });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

//@ts-ignore
app.post("/hr/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.hR.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ message: "Invalid email, please sign up" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Wrong password, please try again" });

        //@ts-ignore
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({ token });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization; // Ensure Bearer token format is handled

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        //@ts-ignore
        const decoded = jwt.verify(token, JWT_SECRET); // Ensure correct typing
        req.user = { userId: decoded.userId }; // Fix the assignment of userId
        console.log("Authenticated user:", req.user); // Debugging log
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};


//check if it is a student 
//@ts-ignore
app.get('/profile', authenticateUser, async (req: AuthRequest, res: Response) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    try {
        const user = await prisma.student.findUnique({
            where: { id: req.user?.userId },
            select: { id: true, name: true, email: true },
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
});

const isHR = async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    console.log(req.user)
    
    try {
        const hrUser = await prisma.hR.findUnique({ where: { id: req.user.userId } });
        if (!hrUser) return res.status(403).json({ message: "Access denied" });
        
        next();
    } catch (error: unknown) {
        res.status(500).json({ error: "An unknown error occurred" });
    }
};

// Example: Protecting an HR-specific route
//@ts-ignore
app.get("/hr/dashboard", authenticateUser, isHR, async (req: AuthRequest, res: Response) => {
    res.json({ message: "Welcome to the HR Dashboard" });
});


//@ts-ignore
app.post('/feedback', authenticateUser ,async (req: AuthRequest, res: Response) => {
    console.log(req.user);
    const { name, email, message } = req.body;

    try {
        await prisma.feedback.create({
            data: { name, email, message },
        })
        res.json({ message: "successful" })
    } catch (error) {
        res.json({ message: "error submitting feedback, please try again later" })
    }
})

app.listen(3001, () => console.log("Server running on port 3001"));