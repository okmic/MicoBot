import { FastifyInstance } from 'fastify'
import { pingController } from '../controllers/ping.controller'

export default async function pingRouter(fastify: FastifyInstance) {
    fastify.get('/bots', pingController)
    fastify.get('/bots/:botId', pingController)
}