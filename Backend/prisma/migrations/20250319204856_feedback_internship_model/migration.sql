-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Message" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Internships" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "stipend" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "starting_date" TIMESTAMP(3) NOT NULL,
    "is_immediate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Internships_pkey" PRIMARY KEY ("id")
);
