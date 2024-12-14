import { Context } from "grammy";
import { clientsTgMenu } from "../services/clients.tg.menu.service";

export const startCommand = async (ctx: Context) => {
await ctx.reply("", {
    reply_markup: clientsTgMenu()
})
}

export const helpCommand = async (ctx: Context) => {
    await ctx.reply('Вот список доступных команд:\n/start - начать\n/help - помощь');
}