/**
 * Interfaz que representa una canción.
 *
 * Contiene la información básica necesaria para mostrar una canción
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada canción tiene un `id` único, un `cancion`, un `artista`, un
 * `genero` musical y un `anio` de publicación.
 *
 * @example
 * ```ts
 * const musica: Musica = {
 *   id: 1,
 *   cancion: 'Piano Man',
 *   artista: 'Billy Joel',
 *   genero: 'Rock',
 *   anio: 1973
 * };
 * ```
 */
export interface Musica {
  /** Identificador único de la canción */
  id: number;

  /** Título de la canción */
  cancion: string;

  /** Artista que interpreta la canción */
  artista: string;

  /** Género musical de la canción */
  genero: string;

  /** Año de publicación de la canción */
  anio: number;
}
