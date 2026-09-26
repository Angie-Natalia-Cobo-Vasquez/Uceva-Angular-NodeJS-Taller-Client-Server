import { faker } from '@faker-js/faker';
import { Musica } from '../../../domain/interfaces/musica.interface';

/**
 * Servicio encargado de generar canciones ficticias.
 *
 * @remarks
 * Utiliza los proveedores musicales de Faker para generar canciones,
 * artistas y géneros.
 */
export class MusicaService {

  /**
   * Obtiene un listado de canciones generadas dinámicamente.
   *
   * @param countMusica Cantidad de canciones a generar
   * @returns Promesa que resuelve un arreglo de canciones
   *
   * @example
   * ```ts
   * const canciones = await musicaService.getAllMusica(10);
   * ```
   */
  public async getAllMusica(countMusica: number): Promise<Musica[]> {
    const canciones: Promise<Musica>[] = [];

    for (let i = 1; i <= countMusica; i++) {
      canciones.push(this.generateMusica(i));
    }

    return Promise.all(canciones);
  }

  /**
   * Genera una canción ficticia mediante Faker.
   *
   * @param id Identificador único de la canción
   * @returns Promesa que resuelve una canción generada
   */
  private generateMusica(id: number): Promise<Musica> {
    return Promise.resolve({
      id,
      cancion: faker.music.songName(),
      artista: faker.music.artist(),
      genero: faker.music.genre(),
      anio: faker.number.int({ min: 1950, max: 2024 }),
    });
  }
}
