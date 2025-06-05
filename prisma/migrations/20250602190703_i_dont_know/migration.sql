-- CreateTable
CREATE TABLE "Users" (
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

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelTypes" (
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

    CONSTRAINT "FuelTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
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

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brands" (
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

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Models" (
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

    CONSTRAINT "Models_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelTypes" ADD CONSTRAINT "FuelTypes_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_fuelTypeId_fkey" FOREIGN KEY ("fuelTypeId") REFERENCES "FuelTypes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Models"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brands" ADD CONSTRAINT "Brands_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
