import { FastifyInstance } from 'fastify'
import pingRouter from './ping.router'
import botsRouter from './bots.router'

export default async function routes(fastify: FastifyInstance) {
    fastify.register(pingRouter, { prefix: '/api' })
    fastify.register(botsRouter, { prefix: '/api/app' })

    fastify.setNotFoundHandler((request, reply) => {
        reply.status(404).send({ error: 'Not Found' })
    })
}