import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { LibrosService } from "./libros.service";

/**
 * Controlador de libros.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con libros,
 * delegando la lógica de negocio al `LibrosService`.
 */
export class LibrosController {

  /**
   * Servicio de libros.
   */
  private readonly librosService = new LibrosService();

  /**
   * Maneja la petición HTTP para obtener un listado de libros.
   *
   * @remarks
   * El número de libros a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /libros/10
   * ```
   */
  getAllLibros = (req: Request, res: Response): void => {
    const { countLibros } = req.params;

    setTimeout(() => {
      this.librosService
      .getAllLibros(Number(countLibros))
      .then((libros) => res.status(201).json(libros))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
