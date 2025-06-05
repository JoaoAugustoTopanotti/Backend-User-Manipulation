/*
  Warnings:

  - You are about to drop the `Brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FuelTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Models` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicles` table. If the table is not empty, all the data it contains will be lost.

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
ALTER TABLE "Models" DROP CONSTRAINT "Models_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_fuelTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_modelId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_updatedById_fkey";

-- DropTable
DROP TABLE "Brands";

-- DropTable
DROP TABLE "FuelTypes";

-- DropTable
DROP TABLE "Models";

-- DropTable
DROP TABLE "Vehicles";

-- CreateTable
CREATE TABLE "fuelTypes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL,
    "createdById" UUID,
    "updatedById" UUID,
    "deletedById" UUID,

    CONSTRAINT "fuelTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" UUID NOT NULL,
    "fipeCode" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "referenceMonth" INTEGER NOT NULL,
    "referenceYear" INTEGER NOT NULL,
    "vehicleYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL,
    "createdById" UUID,
    "updatedById" UUID,
    "deletedById" UUID,
    "fuelTypeId" UUID,
    "modelId" UUID,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "fipeCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL,
    "createdById" UUID,
    "updatedById" UUID,
    "deletedById" UUID,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "fipeCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL,
    "createdById" UUID,
    "updatedById" UUID,
    "deletedById" UUID,
    "brandId" UUID,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fuelTypes" ADD CONSTRAINT "fuelTypes_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fuelTypes" ADD CONSTRAINT "fuelTypes_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fuelTypes" ADD CONSTRAINT "fuelTypes_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_fuelTypeId_fkey" FOREIGN KEY ("fuelTypeId") REFERENCES "fuelTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
