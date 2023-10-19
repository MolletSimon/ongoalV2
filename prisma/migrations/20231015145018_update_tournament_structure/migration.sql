/*
  Warnings:

  - You are about to drop the column `status` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `numberGroups` to the `Phase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberQualifiedByGroup` to the `Phase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberTeamsByGroup` to the `Phase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Phase" ADD COLUMN     "numberGroups" INTEGER NOT NULL,
ADD COLUMN     "numberQualifiedByGroup" INTEGER NOT NULL,
ADD COLUMN     "numberTeamsByGroup" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "status",
ADD COLUMN     "statusId" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- CreateTable
CREATE TABLE "StatusTournament" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "StatusTournament_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "StatusTournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
