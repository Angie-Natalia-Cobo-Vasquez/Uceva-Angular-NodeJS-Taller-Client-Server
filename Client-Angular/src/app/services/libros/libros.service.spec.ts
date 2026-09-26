import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Libro } from '../../interfaces/libros.interface';
import { LIBROS_MOCK } from '../../mocks/libros.mocks';
import { LibrosService } from './libros.service';

describe('LibrosService', () => {
  let service: LibrosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(LibrosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllLibros', () => {

    it('debería realizar una petición GET y retornar una lista de libros', () => {
      const countLibros = 5;
      const mockLibros: Libro[] = LIBROS_MOCK;

      service.getAllLibros(countLibros).subscribe((libros) => {
        expect(libros).toEqual(mockLibros);
        expect(libros.length).toBe(mockLibros.length);
      });

      const req = httpMock.expectOne(`api/libros/${countLibros}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockLibros);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countLibros = 3;

      service.getAllLibros(countLibros).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/libros/${countLibros}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});