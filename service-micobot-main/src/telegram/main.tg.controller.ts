import { Bot } from "grammy"
import { helpMainCommand,startMainCommand } from "./modules/command/main.command"
import { loggingMiddleware } from "./middlewares/logging.middleware"
import dotenv from "dotenv"
dotenv.config()

export default async function mainTgController(): Promise<boolean> {
    try {

        const bot = new Bot(process.env.MAIN_TG_TOKEN as string)
        bot.use(loggingMiddleware)
    
        bot.command('start', startMainCommand)
        bot.command('help', helpMainCommand)

        await bot.start()

        return true

    } catch (e) {
        console.error('Error init main bot:', e)
        throw e
    }
} 