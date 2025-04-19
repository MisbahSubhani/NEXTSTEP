import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import hrRoutes from './routes/hrRoutes';
import studentRoutes from './routes/studentRoutes';
import profileRoutes from './routes/profileRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import internshipRoutes from './routes/internshipRoutes';
import applicationRoutes from './routes/applicationRoutes';
import noticeRoutes from './routes/noticeRoutes';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Create Express app
const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Routes
app.use(authRoutes);
app.use(hrRoutes);
app.use(studentRoutes);
app.use(profileRoutes);
app.use(feedbackRoutes);
app.use(internshipRoutes);
app.use(applicationRoutes);
app.use(noticeRoutes);

// Export the Express app as the Vercel serverless function
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
