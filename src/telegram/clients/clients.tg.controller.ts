import { Bot } from "grammy"
import { loggingMiddleware } from "../middlewares/logging.middleware"
import { helpCommand, startCommand } from "./modules/command/clients.command"
import { User } from "@prisma/client"

export default async function clientsTgController(user: User): Promise<number> {
    try {

        const bot = new Bot(user.telegramToken)
        bot.use(loggingMiddleware)
    
        bot.command('start', startCommand)
        bot.command('help', helpCommand)

        await bot.start()
        return bot.botInfo.id
    } catch (e) {
        console.error('Error init bot:', e)
        throw e
    }
} 