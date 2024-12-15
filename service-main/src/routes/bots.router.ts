import { FastifyInstance } from 'fastify'
import { getByIdController,getManyController } from '../controllers/bots.controller'

export default async function botsRouter(fastify: FastifyInstance) {
    fastify.get('/bots', getManyController)
    fastify.get('/bots/:botId', getByIdController)
}