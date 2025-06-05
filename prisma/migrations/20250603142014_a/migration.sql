/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Brands" DROP CONSTRAINT "Brands_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Brands" DROP CONSTRAINT "Brands_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Brands" DROP CONSTRAINT "Brands_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "FuelTypes" DROP CONSTRAINT "FuelTypes_createdById_fkey";

-- DropForeignKey
ALTER TABLE "FuelTypes" DROP CONSTRAINT "FuelTypes_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "FuelTypes" DROP CONSTRAINT "FuelTypes_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_updatedById_fkey";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "contact" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL,
    "createdById" UUID,
    "updatedById" UUID,
    "deletedById" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
