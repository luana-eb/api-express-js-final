# 📚 API RESTful - Sistema de Postagens

Esta é uma API construída com **Node.js**, **Express** e **MongoDB** para gerenciamento de usuários, autores e postagens. A API segue o padrão **MVC** e utiliza **JWT** para autenticação, **Swagger** para documentação e **DTOs** para segurança na troca de dados.

---

## 🚀 Funcionalidades

- ✅ Registro e autenticação de usuários
- ✅ CRUD de autores
- ✅ CRUD de posts com associação a autores
- ✅ Busca por nome (autor, usuário) e palavra-chave (post)
- ✅ Documentação com Swagger
- ✅ Proteção de rotas com JWT

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Swagger (OpenAPI)
- JSON Web Token (JWT)
- BcryptJS
- dotenv

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sua-api.git
cd sua-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o `.env`:

Crie um arquivo `.env` na raiz do projeto e insira:

```
DB_CONNECTION_STRING=mongodb+srv://usuario:senha@cluster.mongodb.net/nomedobanco
JWT_SECRET=sua_chave_secreta
```

---

## ▶️ Executando o projeto

```bash
npm start
# ou, se usar nodemon:
npm run dev
```

A API estará disponível em: `http://localhost:3000`

---

## 🔐 Autenticação

Use a rota:

```http
POST /auth/login
```

Exemplo de body:
```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

A resposta será um token JWT:

```json
{
  "accessToken": "jwt.token.aqui"
}
```

Utilize este token como:

```
Authorization: Bearer jwt.token.aqui
```

---

## 📘 Documentação Swagger

Acesse a documentação completa em:

```
http://localhost:3000/api-docs
```

---

## 📬 Principais Endpoints

### Usuários
- `GET /users` – Lista todos os usuários
- `POST /users` – Registra um novo usuário
- `GET /users/:id` – Busca por ID
- `PUT /users/:id` – Atualiza usuário (protegido)
- `DELETE /users/:id` – Remove usuário (protegido)

### Autores
- `GET /authors` – Lista todos
- `POST /authors` – Cria novo
- `GET /authors/:id` – Busca por ID
- `PUT /authors/:id` – Atualiza
- `DELETE /authors/:id` – Remove
- `GET /authors/search/:name` – Busca por nome

### Posts
- `GET /posts` – Lista posts
- `POST /posts` – Cria post
- `GET /posts/:id` – Busca post
- `PUT /posts/:id` – Atualiza
- `DELETE /posts/:id` – Remove
- `GET /posts/search?keyword=termo` – Busca por palavra-chave

---

## 🧪 Testes

Você pode testar a API diretamente pelo Swagger ou por ferramentas como **Postman** e **Insomnia**.

---

## 📂 Estrutura de Pastas

```
src/
├── config/
├── controllers/
├── dtos/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── app.js
server.js
```

---

## 🧾 Licença

Este projeto é livre para fins educacionais e comerciais. 🌱
