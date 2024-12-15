import { Bots, BotTgCommands, BotTgMenu } from "../../service-micobot-main/node_modules/@prisma/client"
import { Context, SessionFlavor } from "../../service-micobot-main/node_modules/grammy"

export type ClientsBotsContextType = Context & SessionFlavor<{[botId: string]: {botId: number}}>
export type FullBotsType = (
    Bots & {
    commands: BotTgCommands[]
    menu: BotTgMenu[]
})