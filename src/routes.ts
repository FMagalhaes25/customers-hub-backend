import type { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import CreateCustomerController = require ("./controllers/CreateCustomerController")
import ListCustomersControllers = require("./controllers/ListCustomersControllers")
import DeleteCustomerController = require("./controllers/DeleteCustomerController")
import UpdateCustomerController = require("./controllers/UpdateCustomerController")


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersControllers().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })

    fastify.put("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply)
    })
}