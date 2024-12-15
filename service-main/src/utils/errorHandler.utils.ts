import { FastifyReply } from 'fastify'
import { errorResponse } from './response.utils'

export const handleError = (reply: FastifyReply, error: unknown): void => {
    if (error instanceof Error) {
        errorResponse(reply, error.message || 'Internal Server Error')
    } else {
        errorResponse(reply, 'Some error')
    }
}