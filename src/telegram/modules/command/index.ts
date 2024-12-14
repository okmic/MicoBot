import { Context } from "grammy";
import { tgMenu } from "../services/tg.menu.service";

export const startCommand = async (ctx: Context) => {
await ctx.reply("", {
    reply_markup: tgMenu()
})
}

export const helpCommand = async (ctx: Context) => {
    await ctx.reply('Вот список доступных команд:\n/start - начать\n/help - помощь');
}