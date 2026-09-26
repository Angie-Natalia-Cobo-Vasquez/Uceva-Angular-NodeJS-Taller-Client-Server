import { Router } from "express";
import { MusicaController } from "./musica.controller";

export class MusicaRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new MusicaController();

    /**
     * @openapi
     * /api/musica/{countMusica}:
     *   get:
     *     summary: Obtener listado de canciones
     *     description: Retorna canciones generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Musica
     *     parameters:
     *       - in: path
     *         name: countMusica
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de canciones a generar
     *     responses:
     *       200:
     *         description: Lista de canciones generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Musica'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countMusica", controller.getAllMusica);

    return router;
  }
}
