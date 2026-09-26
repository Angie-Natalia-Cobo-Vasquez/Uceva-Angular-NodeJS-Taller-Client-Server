import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { VuelosTableComponent } from '../../components/vuelos-table/vuelos-table.component';
import { State } from '../../interfaces/state.interface';
import { Vuelo } from '../../interfaces/vuelo.interface';
import { VuelosService } from '../../services/vuelos/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.page.html',
  imports: [VuelosTableComponent, AlertComponent],
})
export class VuelosPage {
  vuelos: Vuelo[] = [];
  state: State = 'init';

  private vuelosService = inject(VuelosService);

  ngOnInit(): void {
    this.state = 'loading';
    this.vuelosService.getAllVuelos(10).subscribe({
      next: (vuelos) => {
        this.vuelos = vuelos;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
