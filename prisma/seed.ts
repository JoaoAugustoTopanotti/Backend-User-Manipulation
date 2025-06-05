import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.users.upsert({
    where: {
      email: "teste@example.com"
    },
    update: {},
    create: {
      name: "John",
      birthDate: new Date(),
      contact: "9999999",
      nationalId: "192929292",
      email: "teste@example.com",
      password: "12345",
      token: "asj824887",
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
      createdBy: {
        connect: { id: "8466c6d3-7605-4f90-bf0f-4985cf7c5a31" } 
      }
    }
  })
  console.log({ user })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })