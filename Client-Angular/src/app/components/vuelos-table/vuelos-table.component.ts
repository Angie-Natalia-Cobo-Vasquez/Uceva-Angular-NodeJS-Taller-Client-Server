import { Component, Input } from '@angular/core';
import { Vuelo } from '../../interfaces/vuelo.interface';

@Component({
  selector: 'app-vuelos-table',
  templateUrl: './vuelos-table.component.html',
})
export class VuelosTableComponent {
  @Input() vuelos: Vuelo[] = [];
}
