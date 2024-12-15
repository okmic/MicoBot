import { FastifyInstance } from 'fastify'
import pingRouter from './ping.router'

export default async function routes(fastify: FastifyInstance) {
    fastify.register(pingRouter, { prefix: '/api' })

    fastify.setNotFoundHandler((request, reply) => {
        reply.status(404).send({ error: 'Not Found' })
    })
}