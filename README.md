# Backend - Cadastro de Clientes

API backend em Node.js com Fastify para cadastro de clientes usando Prisma ORM e MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![CORS](https://img.shields.io/badge/CORS-Enabled-0A7EA4?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Executando o projeto](#executando-o-projeto)
- [Rotas da API](#rotas-da-api)
- [Modelagem com Prisma](#modelagem-com-prisma)
- [Troubleshooting](#troubleshooting)
- [Próximos passos](#próximos-passos)

## Visão geral

Este projeto expõe uma API HTTP para:

- Verificar se o servidor está online
- Criar clientes na base MongoDB
- Listar clientes cadastrados
- Atualizar clientes existentes
- Deletar clientes

Atualmente existe 1 entidade principal: `Customer`.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- @fastify/cors
- Prisma ORM (`prisma` + `@prisma/client`)
- MongoDB (Atlas/local)
- dotenv
- tsx (watch mode)

## Estrutura do projeto

```txt
backend/
├─ prisma/
│  └─ schema.prisma
├─ src/
│  ├─ controllers/
│  │  ├─ CreateCustomerController.ts
│  │  ├─ ListCustomersControllers.ts
│  │  ├─ UpdateCustomerController.ts
│  │  └─ DeleteCustomerController.ts
│  ├─ generated/
│  │  └─ prisma/
│  ├─ services/
│  │  ├─ CreateCustomerService.ts
│  │  ├─ ListCustomersService.ts
│  │  ├─ UpdateCustomerService.ts
│  │  └─ DeleteCustomerService.ts
│  ├─ routes.ts
│  └─ server.ts
├─ .env
├─ package.json
└─ tsconfig.json
```

## Pré-requisitos

- Node.js 20+ (recomendado)
- npm 10+
- Acesso a uma base MongoDB (Atlas ou local)

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Crie (ou ajuste) o arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority"
```

Observações:

- Use uma URL MongoDB válida iniciando com `mongodb://` ou `mongodb+srv://`
- Se usuário/senha tiverem caracteres especiais, faça URL encode

3. Gere o Prisma Client:

```bash
npx prisma generate
```

## Executando o projeto

Modo desenvolvimento (watch):

```bash
npm run dev
```

Servidor padrão:

- `http://localhost:3333`

## Rotas da API

### GET /teste

Health-check simples.

Resposta esperada:

```json
{
  "ok": true
}
```

### POST /customer

Cria um cliente.

Body (JSON):

```json
{
  "name": "teste",
  "email": "teste@email.com"
}
```

Resposta de sucesso (200):

```json
{
  "id": "...",
  "name": "teste",
  "email": "teste@email.com",
  "status": true,
  "created_at": "2026-04-25T05:08:01.983Z",
  "updated_at": "2026-04-25T05:08:01.983Z"
}
```

### GET /customers

Lista todos os clientes.

Resposta de sucesso (200):

```json
[
  {
    "id": "...",
    "name": "teste",
    "email": "teste@email.com",
    "status": true,
    "created_at": "2026-04-25T05:08:01.983Z",
    "updated_at": "2026-04-25T05:08:01.983Z"
  }
]
```

### PUT /customer?id=ID_DO_CLIENTE

Atualiza um cliente existente.

Body (JSON):

```json
{
  "name": "teste",
  "email": "teste@email.com"
}
```

Resposta de sucesso (200):

```json
{
  "id": "...",
  "name": "teste",
  "email": "teste@email.com",
  "status": true,
  "created_at": "2026-04-25T05:08:01.983Z",
  "updated_at": "2026-04-25T05:15:42.120Z"
}
```

### DELETE /customer?id=ID_DO_CLIENTE

Deleta um cliente pelo id enviado na query string.

Resposta de sucesso (200):

```json
{
  "message": "Deletado com sucesso!"
}
```

## Modelagem com Prisma

Arquivo de schema: `prisma/schema.prisma`

- Provider: `mongodb`
- Model: `Customer`
- Campos:
  - `id` (ObjectId)
  - `name` (string)
  - `email` (string)
  - `status` (boolean)
  - `created_at` (DateTime)
  - `updated_at` (DateTime)

Comandos úteis Prisma:

```bash
npx prisma validate
npx prisma generate
```

Feito para estudo de backend com TypeScript + Fastify + Prisma + MongoDB.
