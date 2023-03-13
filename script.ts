import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const main = async () => {

    // write prisma clients here
    console.log("prisma client runs");

    // get all users and log em out
    const users = await prisma.findMany()
    console.log(users);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })



