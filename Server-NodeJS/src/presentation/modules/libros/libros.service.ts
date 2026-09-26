import { faker } from '@faker-js/faker';
import { Libro, LibroGenero } from '../../../domain/interfaces/libro.interface';

/**
 * Servicio encargado de la generación y gestión de libros.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar libros
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class LibrosService {

  /**
   * Géneros disponibles para los libros.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un género
   * a cada libro generado.
   */
  private generos: LibroGenero[] = [
    'Novela',
    'Ciencia Ficcion',
    'Fantasia',
    'Misterio'
  ];

  /**
   * Obtiene un listado de libros generados dinámicamente.
   *
   * @param countLibros Cantidad de libros a generar
   * @returns Promesa que resuelve un arreglo de libros
   *
   * @example
   * ```ts
   * const libros = await librosService.getAllLibros(10);
   * ```
   */
  public async getAllLibros(countLibros: number): Promise<Libro[]> {
    const libros: Promise<Libro>[] = [];

    for (let i = 1; i <= countLibros; i++) {
      libros.push(this.generateLibro(i));
    }

    return Promise.all(libros);
  }

  /**
   * Genera un libro ficticio.
   *
   * @param id Identificador único del libro
   * @returns Promesa que resuelve un libro generado
   */
  private generateLibro(id: number): Promise<Libro> {
    return Promise.resolve({
      id,
      titulo: faker.book.title(),
      autor: faker.book.author(),
      genero: faker.helpers.arrayElement(this.generos),
      anio: faker.number.int({ min: 1900, max: 2024 }),
    });
  }
}
