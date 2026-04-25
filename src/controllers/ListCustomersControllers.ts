import type { FastifyRequest, FastifyReply } from 'fastify'
import ListCustomersService = require('../services/ListCustomersService')

class ListCustomersControllers {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomersService()

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }
}

export = ListCustomersControllers