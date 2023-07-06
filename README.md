# API de Loja Online

Esta é uma API em Node.js que utiliza o framework Express e um banco de dados MySQL para fornecer recursos de CRUD (Create, Read, Update, Delete) para uma loja online. A API também implementa autenticação de login usando JsonWebToken (JWT).

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Gerenciamento de dados pessoais:
  - Criação, leitura, atualização e exclusão de dados pessoais dos usuários

- Gerenciamento de endereços:
  - Criação, leitura, atualização e exclusão de endereços dos usuários

- Autenticação de login:
  - Autenticação de login usando JWT

- Gerenciamento de pedidos:
  - Criação, leitura, atualização e exclusão de pedidos

- Gerenciamento de produtos:
  - Criação, leitura, atualização e exclusão de produtos

- Gerenciamento de usuários:
  - Criação, leitura, atualização e exclusão de usuários

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- MySQL - [Download & Install MySQL](https://dev.mysql.com/downloads/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/justtpaulo/api-nodejs-lojatech.git
```

2. Instale as dependências:

```bash
cd api-nodejs-lojatech
npm install
```

3. Configure o banco de dados:

- Crie um banco de dados MySQL.
- Renomeie o arquivo `.env.example` para `.env` e atualize as variáveis de ambiente com as informações de conexão do seu banco de dados.

4. Execute as migrações do banco de dados:

```bash
npx sequelize-cli db:migrate
```

5. Inicie o servidor:

```bash
npm start
```

A API estará acessível em [http://localhost:3000](http://localhost:3000).

## Endpoints

A seguir estão os endpoints fornecidos pela API:

- `POST /dadosPessoais`: Criação de dados pessoais do usuário.
- `GET /dadosPessoais/:id`: Retorna os dados pessoais do usuário com base no ID fornecido.
- `PUT /dadosPessoais/:id`: Atualiza os dados pessoais do usuário com base no ID fornecido.
- `DELETE /dadosPessoais/:id`: Exclui os dados pessoais do usuário com base no ID fornecido.

- `POST /enderecos`: Criação de endereço do usuário.
- `GET /enderecos/:id`: Retorna o endereço do usuário com base no ID fornecido.
- `PUT /enderecos/:id`: Atualiza o endereço do usuário com base no ID fornecido.
- `DELETE /enderecos/:id`: Exclui o endereço do usuário com base no ID fornecido.

- `POST /login`: Realiza o login do usuário. Requer um corpo de requisição contendo um objeto JSON com as credenciais de login (email e senha). Retorna um token JWT para autenticação futura.

- `POST /pedidos`: Criação de um novopedido.
- `GET /pedidos/:id`: Retorna um pedido específico com base no ID fornecido.
- `PUT /pedidos/:id`: Atualiza um pedido existente com base no ID fornecido.
- `DELETE /pedidos/:id`: Exclui um pedido existente com base no ID fornecido.

- `POST /produtos`: Criação de um novo produto.
- `GET /produtos/:id`: Retorna um produto específico com base no ID fornecido.
- `PUT /produtos/:id`: Atualiza um produto existente com base no ID fornecido.
- `DELETE /produtos/:id`: Exclui um produto existente com base no ID fornecido.

- `POST /usuarios`: Criação de um novo usuário.
- `GET /usuarios/:id`: Retorna um usuário específico com base no ID fornecido.
- `PUT /usuarios/:id`: Atualiza um usuário existente com base no ID fornecido.
- `DELETE /usuarios/:id`: Exclui um usuário existente com base no ID fornecido.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch com a sua feature: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e faça commit delas: `git commit -m 'Minha nova feature'`.
4. Envie para o branch principal: `git push origin minha-feature`.
5. Envie um pull request explicando as alterações propostas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Recursos adicionais

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Sequelize Documentation](https://sequelize.org/)
- [JsonWebToken (JWT) Documentation](https://jwt.io/introduction/)

## Contato

Em caso de dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

Nome: Paulo José
E-mail: contato@justtpaulo.site
