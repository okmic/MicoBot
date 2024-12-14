import { PrismaClient } from "@prisma/client"
import tgController from "./tg.controller"

export default async function initBots(): Promise<void> {
    try {
        const prisma = new PrismaClient()

        const users = await prisma.user.findMany({
            where: {
                isDisabled: false,
                TariffStatus: "PREMIUM"
            }
        })
        
        for(let i = 0; i < users.length; i++) {
            await tgController(users[i])
        }

        return

    } catch(e) {
        console.error(e)
        throw e
    }
}