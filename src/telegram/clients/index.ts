import { PrismaClient } from "@prisma/client"
import tgController from "./clients.tg.controller"

export default async function initClientsBots(): Promise<void> {
    try {
        const prisma = new PrismaClient()

        const users = await prisma.user.findMany({
            where: {
                isDisabled: false,
                TariffStatus: "PREMIUM"
            }
        })

        for(let i = 0; i < users.length; i++) {
            
            const botId = await tgController(users[i])

            await prisma.user.update({
                data: {
                    telegramBotId: String(botId)
                },
                where: {
                    id: users[i].id
                }
            })
        }

        return

    } catch(e) {
        throw e
    }
}