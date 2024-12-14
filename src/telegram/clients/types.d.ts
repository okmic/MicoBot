import { Bots, BotTgCommands, BotTgMenu } from "@prisma/client"
import { Context, SessionFlavor } from "grammy"

export type ClientsBotsContextType = Context & SessionFlavor<{[botId: string]: {botId: number}}>
export type FullBotsType = (
    Bots & {
    commands: BotTgCommands[]
    menu: BotTgMenu[]
})