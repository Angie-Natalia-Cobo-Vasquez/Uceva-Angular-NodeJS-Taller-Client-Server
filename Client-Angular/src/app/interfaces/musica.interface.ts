/**
 * Información de una canción recibida desde la API.
 */
export interface Musica {
  id: number;
  cancion: string;
  artista: string;
  genero: string;
  anio: number;
}
