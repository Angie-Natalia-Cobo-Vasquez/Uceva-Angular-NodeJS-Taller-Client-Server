import { faker } from '@faker-js/faker';
import { Vuelo } from '../../../domain/interfaces/vuelo.interface';

/** Genera vuelos ficticios usando los proveedores nativos de Faker. */
export class VuelosService {
  /** Obtiene una lista de vuelos con identificadores consecutivos. */
  public async getAllVuelos(countVuelos: number): Promise<Vuelo[]> {
    const vuelos: Promise<Vuelo>[] = [];

    for (let id = 1; id <= countVuelos; id++) {
      vuelos.push(this.generateVuelo(id));
    }

    return Promise.all(vuelos);
  }

  /** Genera un vuelo a partir de proveedores de Faker. */
  private generateVuelo(id: number): Promise<Vuelo> {
    return Promise.resolve({
      id,
      aerolinea: faker.airline.airline().name,
      aeropuerto: faker.airline.airport().name,
      avion: faker.airline.airplane().name,
      numeroVuelo: faker.airline.flightNumber(),
      asiento: faker.airline.seat(),
      codigoReserva: faker.airline.recordLocator(),
    });
  }
}
