import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { LibroGenero, Libro } from '../../interfaces/libros.interface';

/**
 * Componente de tabla de libros.
 *
 * Se utiliza para mostrar un listado de libros en una tabla,
 * mostrando información como id, título, autor, género y año,
 * con un badge visual que indica el género de cada libro.
 *
 * @remarks
 * Este componente recibe los libros desde un componente padre
 * a través del Input `libros` y utiliza el mapeo `generoMap`
 * para asignar colores a los badges según el género.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-libros-table [libros]="librosList"></app-libros-table>
 * ```
 */
@Component({
  selector: 'app-libros-table',
  templateUrl: './libros-table.component.html',
  imports: [BadgeAtom],
})
export class LibrosTableComponent {
  /**
   * Listado de libros que se mostrarán en la tabla.
   * @type {Libro[]}
   * @remarks
   * Este Input permite pasar un array de libros desde un componente padre,
   * generalmente `LibrosPage`. Cada libro debe cumplir la interfaz `Libro`.
   */
  @Input() libros: Libro[] = [];
  /**
   * Mapeo de géneros de libros a tipos de Badge.
   * @type {Record<LibroGenero, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada género:
   * - 'Novela' → 'primary' (azul)
   * - 'Ciencia Ficcion' → 'success' (verde)
   * - 'Fantasia' → 'warning' (amarillo)
   * - 'Misterio' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada libro tenga un badge visual que indique su género
   * de forma clara para el usuario.
   */
  generoMap: Record<LibroGenero, BadgeType> = {
    'Novela' : 'primary',
    'Ciencia Ficcion': 'success',
    'Fantasia': 'warning',
    'Misterio': 'danger'
  }
}
