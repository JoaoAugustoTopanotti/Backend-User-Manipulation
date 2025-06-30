Esta é a versão **Backend** do projeto **User-Manipulation** que utiliza **Typescript** e **Express** para requisições.

## Estruturação

Os arquivos do Backend são estruturados em DTOs, Entities, Infra, Interface, Repositories, Routes e UseCases. 

## 🔧 Funcionalidades da API

A API oferece os seguintes métodos para manipulação de usuários:

- `Create` – Criação de um novo usuário.
- `FindById` – Busca de usuário por ID.
- `FindByEmail` – Busca de usuário por e-mail.
- `Update` – Atualização de dados de um usuário.
- `Remove` – Remoção de um usuário.
- `List` – Listagem de todos os usuários.
- `FindTokenById` – Buscar token associado ao usuário.

## Guia para Instalação

### 📌 Pré-requisitos

Para instalação, é necessário ter os seguintes itens instalados:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Typescript](https://www.typescriptlang.org/)

### 📌 Passos para instalação

#### Passo 1 - Clone o repositório

` https://github.com/JoaoAugustoTopanotti/Backend-User-Manipulation.git ` <br> <br>
` cd Backend-User-Manipulation `

#### Passo 2 - Instale as dependências

` yarn install `

#### Passo 3 - Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

` DATABASE_URL="postgresql://usuario:senha@localhost:5432/nomedobanco?schema=public" `

#### Passo 4 - Instale o Prisma e rode as migrations
` prisma --save-dev ` <br> <br>
` yarn prisma migrate dev `

#### Passo 5 - Popule o banco com a seed

` yarn prisma db seed `

#### Passo 6 - Rode o projeto

` yarn dev `

Continue o guia de instalação por [aqui](https://github.com/JoaoAugustoTopanotti/Frontend-User-Manipulation/blob/main/README.md).
