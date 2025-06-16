import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Gerenciamento de autores
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: Lista de autores
 */
routes.get("/authors", AuthorController.getAllAuthors);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Cria um novo autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor criado com sucesso
 */
routes.post("/authors", AuthorController.createAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Busca um autor pelo ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor não encontrado
 */
routes.get("/authors/:id", AuthorController.getAuthorById);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Atualiza um autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *       404:
 *         description: Autor não encontrado
 */
routes.put("/authors/:id", AuthorController.updateAuthor);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Remove um autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Autor removido com sucesso
 *       404:
 *         description: Autor não encontrado
 */
routes.delete("/authors/:id", AuthorController.deleteAuthor);

/**
 * @swagger
 * /authors/search/{name}:
 *   get:
 *     summary: Busca autores por nome
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de autores encontrados
 *       404:
 *         description: Nenhum autor encontrado
 */
routes.get("/authors/search/:name", AuthorController.searchAuthorByName);

export default routes;
