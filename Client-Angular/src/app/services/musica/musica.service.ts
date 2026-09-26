import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../../interfaces/musica.interface';

/**
 * Servicio encargado de consultar canciones desde la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de canciones desde el backend.
   *
   * @param countMusica Número de canciones a obtener.
   * @returns Observable que emite un array de canciones.
   */
  getAllMusica(countMusica: number): Observable<Musica[]> {
    return this.httpClient.get<Musica[]>(`api/musica/${countMusica}`);
  }
}
