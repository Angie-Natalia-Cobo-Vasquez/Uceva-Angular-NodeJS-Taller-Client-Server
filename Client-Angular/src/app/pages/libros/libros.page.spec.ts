import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosPage } from './libros.page';
import { provideHttpClient } from '@angular/common/http';
import { LibrosService } from '../../services/libros/libros.service';
import { LibrosTableComponent } from '../../components/libros-table/libros-table.component';
import { of, throwError } from 'rxjs';
import { LIBROS_MOCK } from '../../mocks/libros.mocks';
import { By } from '@angular/platform-browser';

describe('LibrosPage', () => {
  let component: LibrosPage;
  let fixture: ComponentFixture<LibrosPage>;
  let librosService: LibrosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosPage, LibrosTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosPage);
    component = fixture.componentInstance;
    librosService = TestBed.inject(LibrosService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllLibros al iniciar', () => {
    const spyGetAllLibros = jest.spyOn(librosService, 'getAllLibros').mockReturnValue(of(LIBROS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllLibros).toHaveBeenCalled();
  });

  it('debería asignar los libros recibidos del servicio', () => {
    jest.spyOn(librosService, 'getAllLibros').mockReturnValue(of(LIBROS_MOCK));
    fixture.detectChanges();
    expect(component.libros).toEqual(LIBROS_MOCK);
  });

  it('debería pasar los libros al componente libros-table', () => {
    jest.spyOn(librosService, 'getAllLibros').mockReturnValue(of(LIBROS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(LibrosTableComponent))
      .componentInstance;
    expect(tableComponent.libros).toEqual(LIBROS_MOCK);
  });

  it('debería manejar el error cuando falla getAllLibros', () => {
    component.libros = [];
    const errorResponse = new Error('Error al cargar libros');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(librosService, 'getAllLibros').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(librosService.getAllLibros).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.libros.length).toBe(0);
  });
});
