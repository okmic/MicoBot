import { Api, Bot, RawApi } from "grammy"
import { loggingMiddleware } from "../middlewares/logging.middleware"
import { ClientsBotsContextType, FullBotsType } from "./types"
import commandsContoller from "./modules/command"
import { PrismaClient } from "@prisma/client"



export default async function clientsTgController(bot: Bot<ClientsBotsContextType, Api<RawApi>>, clienInfoBot: FullBotsType): Promise<void> {
    try {

        bot.use(loggingMiddleware)

        //commands
        await commandsContoller(bot, clienInfoBot)

        
        await bot.start()
        
        const prisma = new PrismaClient()
        await prisma.bots.update({
            data: {
                telegramBotId: String(bot.botInfo.id)
            },
            where: {
                id: clienInfoBot.id
            }
        })
    } catch (e) {
        console.error('Error init bot:', e)
        throw e;
    }
}
