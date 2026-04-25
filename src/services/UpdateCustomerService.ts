import prismaClient = require("../generated/prisma");

interface UpdateCustomerProps {
    id: string;
    name?: string;
    email?: string;
}

class UpdateCustomerService {
    async execute({ id, name, email }: UpdateCustomerProps) {

        if (!id) {
            throw new Error("Solicitação inválida")
        }

        if (!name && !email) {
            throw new Error("Envie name ou email para atualizar")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente não existe!")
        }

        const customer = await prismaClient.customer.update({
            where: {
                id: id
            },
            data: {
                ...(name && { name }),
                ...(email && { email }),
                updated_at: new Date()
            }
        })

        return customer
    }
}

export = UpdateCustomerService;
