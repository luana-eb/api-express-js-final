import express from "express";
import PostController from "../controllers/postController.js";

const routes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de postagens
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 */
routes.get("/posts", PostController.getAllPosts);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 */
routes.post("/posts", PostController.createPost);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retorna um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
routes.get("/posts/:id", PostController.getPostById);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Remove um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post removido
 *       404:
 *         description: Post não encontrado
 */
routes.delete("/posts/:id", PostController.deletePost);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post existente
 *     tags: [Posts]
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado
 *       404:
 *         description: Post não encontrado
 */
routes.put("/posts/:id", PostController.updatePost);

/**
 * @swagger
 * /posts/search:
 *   get:
 *     summary: Busca posts por palavra-chave (título ou descrição)
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: Palavra-chave a ser buscada
 *     responses:
 *       200:
 *         description: Posts encontrados
 */
routes.get("/posts/search", PostController.findPostsByKeyword);

export default routes;
