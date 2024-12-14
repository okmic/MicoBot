import { Bot } from "grammy"
import { loggingMiddleware } from "./modules/middlewares/logging.middleware"
import { helpCommand, startCommand } from "./modules/command"
import { User } from "@prisma/client"

export default async function tgController(user: User): Promise<numb> {
    try {

        const bot = new Bot(user.telegramToken)
        bot.use(loggingMiddleware)
    
        bot.command('start', startCommand)
        bot.command('help', helpCommand)

        await bot.start()
        return bot.botInfo.id
    } catch (e) {
        console.error('Error init bot:', e)
    }
} 