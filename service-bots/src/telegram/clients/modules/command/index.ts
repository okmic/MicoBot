import { Api, Bot, RawApi } from "grammy"
import {startCommand,helpCommand} from "./clients.constant.command"
import {getDynamicClientsCommand} from "./clients.dynamic.command"
import { ClientsBotsContextType, FullBotsType } from "../../../../../../global/types/bots"

export default async function commandsContoller(bot: Bot<ClientsBotsContextType, Api<RawApi>>, clienInfoBot: FullBotsType) {
    
    bot.command('start', async (ctx) => await startCommand(ctx))

    bot.command('help', async (ctx) => await helpCommand(ctx))
    
    //use dinamic
    await getDynamicClientsCommand(bot, clienInfoBot)

}