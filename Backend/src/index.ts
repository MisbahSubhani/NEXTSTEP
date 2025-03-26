
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import hrRoutes from "./routes/hrRoutes";
import studentRoutes from "./routes/studentRoutes";
import profileRoutes from "./routes/profileRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(authRoutes);
app.use(hrRoutes);
app.use(studentRoutes);
app.use(profileRoutes);
app.use(feedbackRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));