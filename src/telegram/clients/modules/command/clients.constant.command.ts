import { Context } from "grammy";
import { clientsTgMenu } from "../services/clients.tg.menu.service";
import { ClientsBotsContextType } from "../../types";
import { getBotInfoById } from "../utils/bots.db";

export const startCommand = async (ctx: ClientsBotsContextType) => {

    if(ctx.session[ctx.me.id] && ctx.session[ctx.me.id].botId) {
        const botInfo = await getBotInfoById(ctx.session[ctx.me.id].botId)
        if(botInfo) await ctx.reply("test message", {
            reply_markup: clientsTgMenu(botInfo)
        })
    }
}

export const helpCommand = async (ctx: Context) => {
    await ctx.reply('Вот список доступных команд:\n/start - начать\n/help - помощь');
}

