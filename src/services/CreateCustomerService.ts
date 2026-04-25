import prismaClient = require("../generated/prisma");

interface CreateCustomerProps {
    name: String;
    email: String;
}

class CreateCustomerService {
    async execute({name, email}: CreateCustomerProps) {
        
        if (!name || !email ){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })


        return customer;
    }
}

export = CreateCustomerService;