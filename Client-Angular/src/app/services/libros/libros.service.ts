import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../../interfaces/libros.interface';

/**
 * Servicio encargado de la gestión de libros.
 *
 * Proporciona métodos para obtener información de libros
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private librosService: LibrosService) {}
 *
 * this.librosService.getAllLibros(10).subscribe(libros => {
 *   console.log(libros);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class LibrosService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de libros desde el backend.
   *
   * @param countLibros Número de libros a obtener.
   * @returns Observable que emite un array de libros.
   *
   * @example
   * ```ts
   * this.librosService.getAllLibros(5).subscribe(libros => {
   *   console.log(libros);
   * });
   * ```
   */
  getAllLibros(countLibros: number): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(`api/libros/${countLibros}`);
  }
}
