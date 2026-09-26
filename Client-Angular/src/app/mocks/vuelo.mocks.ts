import { Vuelo } from '../interfaces/vuelo.interface';

export const VUELOS_MOCK: Vuelo[] = [
  {
    id: 1,
    aerolinea: 'Avianca',
    aeropuerto: 'Aeropuerto Internacional El Dorado',
    avion: 'Boeing 737-800',
    numeroVuelo: 'AV123',
    asiento: '12A',
    codigoReserva: 'ABC123',
  },
  {
    id: 2,
    aerolinea: 'LATAM Airlines',
    aeropuerto: 'Aeropuerto Internacional Alfonso Bonilla Aragón',
    avion: 'Airbus A320neo',
    numeroVuelo: 'LA456',
    asiento: '18C',
    codigoReserva: 'XYZ789',
  },
];
