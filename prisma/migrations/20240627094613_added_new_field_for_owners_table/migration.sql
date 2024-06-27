/*
  Warnings:

  - Added the required column `country` to the `destinations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `owners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `owners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `owners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "destinations" ADD COLUMN     "country" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "owners" ADD COLUMN     "city" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "country" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "postalCode" TEXT NOT NULL DEFAULT '';
