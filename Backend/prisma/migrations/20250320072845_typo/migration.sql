/*
  Warnings:

  - You are about to drop the column `Message` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `message` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "Message",
ADD COLUMN     "message" TEXT NOT NULL;
