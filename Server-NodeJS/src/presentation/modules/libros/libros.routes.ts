import { Router } from "express";
import { LibrosController } from "./libros.controller";

export class LibrosRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new LibrosController();

    /**
     * @openapi
     * /api/libros/{countLibros}:
     *   get:
     *     summary: Obtener listado de libros
     *     description: Retorna una lista de libros generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Libros
     *     parameters:
     *       - in: path
     *         name: countLibros
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de libros a generar
     *     responses:
     *       200:
     *         description: Lista de libros generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Libro'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countLibros", controller.getAllLibros);

    return router;
  }
}
