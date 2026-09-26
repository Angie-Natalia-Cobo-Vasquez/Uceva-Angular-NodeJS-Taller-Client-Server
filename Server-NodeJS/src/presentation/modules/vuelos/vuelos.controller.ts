import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { VuelosService } from './vuelos.service';

/** Controlador de las solicitudes de vuelos. */
export class VuelosController {
  private readonly vuelosService = new VuelosService();

  getAllVuelos = (req: Request, res: Response): void => {
    const countVuelos = Number(req.params['countVuelos']);

    if (!Number.isInteger(countVuelos) || countVuelos <= 0) {
      res.status(400).json({ error: 'countVuelos debe ser un entero mayor que cero' });
      return;
    }

    setTimeout(() => {
      this.vuelosService
        .getAllVuelos(countVuelos)
        .then((vuelos) => res.status(200).json(vuelos))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
