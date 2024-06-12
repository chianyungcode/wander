/*
  Warnings:

  - You are about to drop the column `name` on the `locations` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `locations` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `locations` table. All the data in the column will be lost.
  - Added the required column `city` to the `destinations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `destinations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `destinations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `destinations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "destinations" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "locations" DROP COLUMN "name",
DROP COLUMN "postalCode",
DROP COLUMN "street";
