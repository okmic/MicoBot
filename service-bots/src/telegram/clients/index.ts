import tgController from "./clients.tg.controller"
import { Bot, session } from "grammy"
import { ClientsBotsContextType, FullBotsType } from "../../../../global/types/bots"
import { getManyBotsInfo } from "./modules/utils/bots.db"

export default async function initClientsBots(): Promise<void> {
    try {

        const bots: FullBotsType[] = await getManyBotsInfo()

        for(let i = 0; i < bots.length; i++) {
            
            const bot =  new Bot<ClientsBotsContextType>(bots[i].telegramToken)

            bot.use(session({
                initial: () => ({[bot.botInfo.id]: {botId: bots[i].id}}) 
            }))
            
            tgController(bot, bots[i])
            
        }

        return

    } catch(e) {
        throw e
    }
}