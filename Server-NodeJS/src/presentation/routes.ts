import { Router } from "express";

import { UsersRoutes } from "./modules/users/users.routes";

import { ProductsRoutes } from "./modules/products/products.routes";

import { VuelosRoutes } from "./modules/vuelos/vuelos.routes";

import { LibrosRoutes } from "./modules/libros/libros.routes";

import { MusicaRoutes } from "./modules/musica/musica.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos de usuarios, productos,
 * libros, música y vuelos.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {

    const router = Router();

    // Definir rutas
    router.use("/api/users", UsersRoutes.routes);

    router.use("/api/products", ProductsRoutes.routes);

    router.use("/api/vuelos", VuelosRoutes.routes);

    router.use("/api/libros", LibrosRoutes.routes);

    router.use("/api/musica", MusicaRoutes.routes);

    return router;
  }

}