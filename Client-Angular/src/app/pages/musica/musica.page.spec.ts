import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { MusicaTableComponent } from '../../components/musica-table/musica-table.component';
import { MUSICA_MOCK } from '../../mocks/musica.mocks';
import { MusicaService } from '../../services/musica/musica.service';
import { MusicaPage } from './musica.page';

describe('MusicaPage', () => {
  let component: MusicaPage;
  let fixture: ComponentFixture<MusicaPage>;
  let musicaService: MusicaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaPage, MusicaTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicaPage);
    component = fixture.componentInstance;
    musicaService = TestBed.inject(MusicaService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar loading mientras espera la respuesta', () => {
    const response = new Subject<typeof MUSICA_MOCK>();
    jest.spyOn(musicaService, 'getAllMusica').mockReturnValue(response);

    fixture.detectChanges();

    expect(component.state).toBe('loading');
    expect(fixture.nativeElement.textContent).toContain('Cargando música...');
    response.complete();
  });

  it('debería solicitar diez canciones y mostrarlas al iniciar', () => {
    const getAllMusica = jest
      .spyOn(musicaService, 'getAllMusica')
      .mockReturnValue(of(MUSICA_MOCK));

    fixture.detectChanges();

    expect(getAllMusica).toHaveBeenCalledWith(10);
    expect(component.musica).toEqual(MUSICA_MOCK);
    const table = fixture.debugElement.query(By.directive(MusicaTableComponent));
    expect(table.componentInstance.musica).toEqual(MUSICA_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería mostrar el estado de error si falla la consulta', () => {
    const error = new Error('Error al cargar música');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(musicaService, 'getAllMusica').mockReturnValue(throwError(() => error));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(console.error).toHaveBeenCalledWith(error);
  });
});
