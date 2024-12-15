import { PrismaClient } from "@prisma/client"
import { FullBotsType } from "../../../global/types/bots"

export const getBotInfoById = async (id: number): Promise<FullBotsType | null> => {
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

export const getManyBotsInfo = async (): Promise<FullBotsType[]> => {
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