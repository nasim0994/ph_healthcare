-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'PATIENT',
ALTER COLUMN "needPasswordChange" SET DEFAULT true,
ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
