import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MUSICA_MOCK } from '../../mocks/musica.mocks';
import { MusicaService } from './musica.service';

describe('MusicaService', () => {
  let service: MusicaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MusicaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar las canciones', () => {
    service.getAllMusica(2).subscribe((musica) => {
      expect(musica).toEqual(MUSICA_MOCK);
    });

    const request = httpMock.expectOne('api/musica/2');
    expect(request.request.method).toBe('GET');
    request.flush(MUSICA_MOCK);
  });

  it('debería propagar los errores de la API', () => {
    service.getAllMusica(2).subscribe({
      next: () => fail('No debería emitir canciones cuando ocurre un error'),
      error: (error) => expect(error.status).toBe(500),
    });

    httpMock.expectOne('api/musica/2').flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' },
    );
  });
});
