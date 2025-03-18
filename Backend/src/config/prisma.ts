// /Backend/src/config/prisma.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

prisma.$connect()
  .then(() => console.log("✅ Connected to DB:", process.env.DATABASE_URL))
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

export default prisma;
