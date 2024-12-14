import { Api, Bot, RawApi } from "grammy"
import { ClientsBotsContextType, FullBotsType } from "../../types"

export const getDynamicClientsCommand = async (bot: Bot<ClientsBotsContextType, Api<RawApi>>, clienInfoBot: FullBotsType) => {
    try {

        
        for (let i = 0; i < clienInfoBot.commands.length; i++) {
            
             bot.command(clienInfoBot.commands[i].commandKey, async (ctx) => await eval(clienInfoBot.commands[i].commandSctipt) )
            
        }
        
        
    } catch (e) {
        throw e
    }
}


