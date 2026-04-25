import prismaClient = require("../generated/prisma");

class ListCustomersService {
    async execute() {

        const customers = await prismaClient.customer.findMany()

        return customers
    }
}

export = ListCustomersService;