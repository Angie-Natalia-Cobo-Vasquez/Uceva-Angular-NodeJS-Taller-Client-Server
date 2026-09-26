import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { MusicaTableComponent } from '../../components/musica-table/musica-table.component';
import { Musica } from '../../interfaces/musica.interface';
import { State } from '../../interfaces/state.interface';
import { MusicaService } from '../../services/musica/musica.service';

/**
 * Página contenedora que carga canciones y muestra su estado o tabla.
 */
@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  imports: [MusicaTableComponent, AlertComponent],
})
export class MusicaPage {
  musica: Musica[] = [];
  state: State = 'init';

  private musicaService = inject(MusicaService);

  ngOnInit(): void {
    this.state = 'loading';
    this.musicaService.getAllMusica(10).subscribe({
      next: (musica) => {
        this.musica = musica;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
