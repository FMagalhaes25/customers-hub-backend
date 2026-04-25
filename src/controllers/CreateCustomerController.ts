import type { FastifyRequest, FastifyReply } from 'fastify'
const CreateCustomerService = require('../services/CreateCustomerService')

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = request.body as { name: String, email: string};

        const customerService = new CreateCustomerService()

        const customer = await customerService.execute({ name, email });

        reply.send(customer)

    }
}

export = CreateCustomerController