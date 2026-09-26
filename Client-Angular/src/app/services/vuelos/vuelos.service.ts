import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../../interfaces/vuelo.interface';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  private httpClient = inject(HttpClient);

  getAllVuelos(countVuelos: number): Observable<Vuelo[]> {
    return this.httpClient.get<Vuelo[]>(`api/vuelos/${countVuelos}`);
  }
}
