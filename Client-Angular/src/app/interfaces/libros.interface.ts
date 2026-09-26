/**
 * Interfaz que representa un libro.
 *
 * Contiene la información básica necesaria para mostrar un libro
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada libro debe tener un `id` único, un `titulo` descriptivo,
 * un `autor`, un `genero` válido y un `anio` de publicación.
 *
 * @example
 * ```ts
 * const libro: Libro = {
 *   id: 1,
 *   titulo: 'Cien años de soledad',
 *   autor: 'Gabriel García Márquez',
 *   genero: 'Novela',
 *   anio: 1967
 * };
 * ```
 */
export interface Libro {
  /** Identificador único del libro */
  id: number;

  /** Título del libro */
  titulo: string;

  /** Autor del libro */
  autor: string;

  /** Género literario del libro */
  genero: LibroGenero;

  /** Año de publicación del libro */
  anio: number;
}

/**
 * Tipo de género literario de un libro.
 *
 * @remarks
 * Este tipo restringe los géneros a los valores predefinidos:
 * - 'Novela'
 * - 'Ciencia Ficcion'
 * - 'Fantasia'
 * - 'Misterio'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const genero: LibroGenero = 'Fantasia';
 * ```
 */
export type LibroGenero = 'Novela' | 'Ciencia Ficcion' | 'Fantasia' | 'Misterio';
