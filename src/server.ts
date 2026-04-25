require('dotenv/config');
const Fastify = require('fastify');
const routes = require('./routes');
const cors = require('@fastify/cors');

const app = Fastify({ logger: true})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
})


const start = async () => {

    await app.register(cors, {
        origin: '*', // Permite todas as origens. Recomendado restringir em produção: ['http://localhost:3000', 'https://meuapp.com']
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await app.register(routes.routes);

    try {
        await app.listen({port: 3333})
    } catch (err) {
        process.exit(1)
    }
}


start();