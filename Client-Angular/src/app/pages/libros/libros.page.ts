import { Component, inject } from '@angular/core';
import { LibrosTableComponent } from '../../components/libros-table/libros-table.component';
import { Libro } from '../../interfaces/libros.interface';
import { LibrosService } from '../../services/libros/libros.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de libros.
 *
 * Se utiliza para gestionar y mostrar un listado de libros
 * utilizando el componente `LibrosTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `LibrosService`
 * para obtener los libros y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  imports: [LibrosTableComponent, AlertComponent],
})
export class LibrosPage {
  /**
   * Listado de libros obtenidos desde el servicio.
   * @type {Libro[]}
   */
  libros: Libro[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener libros.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private librosService = inject(LibrosService);

  /**
   * Inicializa el componente y carga los libros.
   * @remarks
   * Se suscribe al método `getAllLibros()` del servicio y
   * asigna los datos recibidos a la propiedad `libros`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.librosService.getAllLibros(10).subscribe({
      next: (libros) => {
        this.libros = libros;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
