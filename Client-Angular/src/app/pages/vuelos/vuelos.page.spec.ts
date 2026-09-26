import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, Subject, throwError } from 'rxjs';
import { VuelosTableComponent } from '../../components/vuelos-table/vuelos-table.component';
import { VUELOS_MOCK } from '../../mocks/vuelo.mocks';
import { VuelosService } from '../../services/vuelos/vuelos.service';
import { VuelosPage } from './vuelos.page';

describe('VuelosPage', () => {
  let component: VuelosPage;
  let fixture: ComponentFixture<VuelosPage>;
  let service: VuelosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuelosPage, VuelosTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(VuelosPage);
    component = fixture.componentInstance;
    service = TestBed.inject(VuelosService);
  });

  it('crea la página', () => expect(component).toBeTruthy());

  it('muestra el estado de carga mientras espera la respuesta', () => {
    const response = new Subject<typeof VUELOS_MOCK>();
    const request = jest.spyOn(service, 'getAllVuelos').mockReturnValue(response);

    fixture.detectChanges();

    expect(request).toHaveBeenCalledWith(10);
    expect(component.state).toBe('loading');
    expect(fixture.nativeElement.textContent).toContain('Cargando vuelos...');
    response.complete();
  });

  it('asigna y muestra los vuelos recibidos', () => {
    jest.spyOn(service, 'getAllVuelos').mockReturnValue(of(VUELOS_MOCK));

    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.vuelos).toEqual(VUELOS_MOCK);
    const table = fixture.debugElement.query(By.directive(VuelosTableComponent));
    expect(table.componentInstance.vuelos).toEqual(VUELOS_MOCK);
  });

  it('muestra el estado de error si falla la solicitud', () => {
    const error = new Error('Error al cargar vuelos');
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    jest.spyOn(service, 'getAllVuelos').mockReturnValue(throwError(() => error));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(console.error).toHaveBeenCalledWith(error);
    expect(fixture.nativeElement.textContent).toContain('Error al cargar los vuelos');
  });
});
