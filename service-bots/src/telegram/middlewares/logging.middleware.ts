import { Context, NextFunction } from "grammy"

export const loggingMiddleware = async (ctx: Context, next: NextFunction) => {
    console.log(`Получено сообщение от ${ctx.from?.username}: ${ctx.message?.text}`)
    await next()
}