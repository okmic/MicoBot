import { PrismaClient } from "@prisma/client"
import { FullBotsType } from "../../types"

export const getBotInfoById = async (id: number) => {
    const prisma = new PrismaClient()

    const bot: FullBotsType | null= await prisma.bots.findUnique({
            where: {
                id: id
            },
            include: {
                commands: true,
                menu: true
            }
        })
        

    return bot
}

export const getManyBotsInfo = async () => {
    const prisma = new PrismaClient()

    const bots: FullBotsType[] = await prisma.bots.findMany({
        where: {
            isDisabled: false,
            TariffStatus: "PREMIUM"
        },
        include: {
            commands: true,
            menu: true
        }
    })


    return bots
}