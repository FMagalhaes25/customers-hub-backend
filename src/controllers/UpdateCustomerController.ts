import type { FastifyRequest, FastifyReply } from 'fastify'
import UpdateCustomerService = require('../services/UpdateCustomerService')

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const { name, email } = request.body as { name?: string, email?: string }

        const customerService = new UpdateCustomerService();

        const payload = {
            id,
            ...(name !== undefined && { name }),
            ...(email !== undefined && { email })
        }

        const customer = await customerService.execute(payload)

        reply.send(customer)
    }
}

export = UpdateCustomerController
