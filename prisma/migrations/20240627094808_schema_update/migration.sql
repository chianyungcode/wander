-- AlterTable
ALTER TABLE "destinations" ALTER COLUMN "country" DROP DEFAULT;

-- AlterTable
ALTER TABLE "owners" ALTER COLUMN "city" DROP DEFAULT,
ALTER COLUMN "country" DROP DEFAULT,
ALTER COLUMN "postalCode" DROP DEFAULT;
