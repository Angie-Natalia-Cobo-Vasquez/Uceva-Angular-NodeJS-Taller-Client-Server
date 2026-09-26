import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VUELOS_MOCK } from '../../mocks/vuelo.mocks';
import { VuelosService } from './vuelos.service';

describe('VuelosService', () => {
  let service: VuelosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(VuelosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('realiza GET y retorna los vuelos solicitados', () => {
    service.getAllVuelos(2).subscribe((vuelos) => expect(vuelos).toEqual(VUELOS_MOCK));

    const request = httpMock.expectOne('api/vuelos/2');
    expect(request.request.method).toBe('GET');
    request.flush(VUELOS_MOCK);
  });

  it('propaga los errores HTTP', () => {
    service.getAllVuelos(2).subscribe({
      next: () => fail('No debería emitir vuelos cuando ocurre un error'),
      error: (error) => expect(error.status).toBe(500),
    });

    httpMock.expectOne('api/vuelos/2').flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' },
    );
  });
});
