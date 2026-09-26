import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { MusicaService } from "./musica.service";

/**
 * Controlador de música.
 *
 * @remarks
 * Maneja las peticiones HTTP relacionadas con canciones y delega
 * la generación de datos al `MusicaService`.
 */
export class MusicaController {

  /** Servicio de música. */
  private readonly musicaService = new MusicaService();

  /**
   * Maneja la petición HTTP para obtener un listado de canciones.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /musica/10
   * ```
   */
  getAllMusica = (req: Request, res: Response): void => {
    const { countMusica } = req.params;
    const count = Number(countMusica);

    if (!Number.isInteger(count) || count < 1) {
      res.status(400).json({ error: "countMusica debe ser un entero mayor que cero" });
      return;
    }

    setTimeout(() => {
      this.musicaService
        .getAllMusica(count)
        .then((musica) => res.status(200).json(musica))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
