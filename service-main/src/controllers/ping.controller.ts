import { FastifyRequest, FastifyReply } from 'fastify'
import { successResponse } from '../utils/response.utils'
import { handleError } from '../utils/errorHandler.utils'

export const pingController = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  try {
    return successResponse(reply, { msg: "pong"})
  } catch (e) {
    return handleError(reply, {error: e,  errorCode: "fdw32ufj23jf32kf99xkkcbn2915nnxi9dh"})
  }
}
