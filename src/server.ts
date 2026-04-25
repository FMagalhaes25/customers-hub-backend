require('dotenv/config');
const Fastify = require('fastify');
const routes = require('./routes');
const cors = require('@fastify/cors');

const app = Fastify({ logger: true})

const start = async () => {

    await app.register(cors);
    await app.register(routes.routes);

    try {
        await app.listen({port: 3333})
    } catch (err) {
        process.exit(1)
    }
}


start();