import { FastifyRequest, FastifyReply } from 'fastify'
import { successResponse } from '../utils/response.utils'
import { handleError } from '../utils/errorHandler.utils'
import { getBotInfoById,getManyBotsInfo } from '../services/bots.service'

export const getManyController = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    
    const response = await getManyBotsInfo()

    return successResponse(reply, { botInfo: response })
  } catch (e) {
    handleError(reply, {error: e,  errorCode: "fdw32ufj23jf32kf99xkkcbn2915nnxi9dh"})
  }
}


export const getByIdController = async (req: FastifyRequest<{Params: {botId: string}}>, reply: FastifyReply): Promise<void> => {
  try {
    const {botId} = req.params

    const response = await getBotInfoById(Number(botId))

    return successResponse(reply, { botInfo: response })
  } catch (e) {
    handleError(reply, {error: e,  errorCode: "fdw32ufj23jf32kf99xkkcbn2915nnxi9dh"})
  }
}

