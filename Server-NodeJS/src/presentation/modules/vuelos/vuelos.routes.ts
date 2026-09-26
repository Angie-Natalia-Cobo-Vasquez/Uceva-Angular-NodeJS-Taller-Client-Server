import { Router } from 'express';
import { VuelosController } from './vuelos.controller';

export class VuelosRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new VuelosController();

    /**
     * @openapi
     * /api/vuelos/{countVuelos}:
     *   get:
     *     summary: Obtener listado de vuelos
     *     description: Retorna vuelos generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Vuelos
     *     parameters:
     *       - in: path
     *         name: countVuelos
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de vuelos a generar
     *     responses:
     *       200:
     *         description: Lista de vuelos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Vuelo'
     *       400:
     *         description: Parámetro inválido
     */
    router.get('/:countVuelos', controller.getAllVuelos);

    return router;
  }
}
