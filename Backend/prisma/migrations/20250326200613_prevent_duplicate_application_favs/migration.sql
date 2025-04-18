/*
  Warnings:

  - A unique constraint covering the columns `[studentId,internshipId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId,internshipId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Application_studentId_internshipId_key" ON "Application"("studentId", "internshipId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_studentId_internshipId_key" ON "Favorite"("studentId", "internshipId");
