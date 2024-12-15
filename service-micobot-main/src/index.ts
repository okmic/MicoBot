import fastify, { FastifyInstance } from 'fastify'
import routes from './routes/index'
import dotenv from 'dotenv'
import { errorResponse } from './utils/response.utils'
import initMainBot from './telegram'

dotenv.config()

const app: FastifyInstance = fastify({ logger: true })

app.register(require('@fastify/cors'), {
    origin: 'someDomen', 
})

app.register(routes)

app.setErrorHandler((error, request, reply) => {
    const statusCode = error.statusCode || 500
    return errorResponse(reply, error.message || '=-(( panic error', statusCode)
})

const start = async (): Promise<void> => {
    try {

        try {
            initMainBot()
        } catch (e) {
            console.error(e)
        }


        const PORT = Number(process.env.PORT)
        await app.listen({ port: PORT })
        const address = app.server.address()

        if (typeof address === 'object' && address !== null) {
            app.log.info(`MicoBot on ---> ${address.address}:${address.port}`)
        } else {
            app.log.info(`MicoBot on ---> ${address}`)
        }
    } catch (err) {
        app.log.error(err)
    }
}

start()
