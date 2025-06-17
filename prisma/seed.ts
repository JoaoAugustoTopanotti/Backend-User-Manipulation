import { PrismaClient } from "@prisma/client"
import { connect } from "http2"

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.users.upsert({
    where: {
      email: "teste@example.com"
    },
    update: {},
    create: {
      name: "System",
      birthDate: new Date(),
      contact: "9999999",
      nationalId: "192929292",
      email: "System@email.com",
      password: "12345",
      token: "8466c6d3-7605-4f90-bf0f-4985cf7c5a31",
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
      createdBy: {
        connect: { id: '26318b14-08d4-43a2-8d9a-0272d9de4a71' }
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