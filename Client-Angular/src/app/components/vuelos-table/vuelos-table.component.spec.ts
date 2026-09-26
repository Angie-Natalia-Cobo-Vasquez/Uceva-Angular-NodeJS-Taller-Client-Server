import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VUELOS_MOCK } from '../../mocks/vuelo.mocks';
import { VuelosTableComponent } from './vuelos-table.component';

describe('VuelosTableComponent', () => {
  let component: VuelosTableComponent;
  let fixture: ComponentFixture<VuelosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VuelosTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(VuelosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('crea la tabla', () => expect(component).toBeTruthy());

  it('renderiza la tabla y los encabezados', () => {
    expect(fixture.debugElement.query(By.css('table'))).toBeTruthy();
    const headers = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headers.map((header) => header.nativeElement.textContent.trim())).toEqual([
      'Id', 'Aerolínea', 'Aeropuerto', 'Avión', 'Número de vuelo', 'Asiento', 'Código de reserva',
    ]);
  });

  it('renderiza una fila por vuelo y sus siete campos', () => {
    component.vuelos = VUELOS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows).toHaveLength(VUELOS_MOCK.length);

    rows.forEach((row, index) => {
      const vuelo = VUELOS_MOCK[index];
      const cells = row.queryAll(By.css('th, td'));
      expect(cells.map((cell) => cell.nativeElement.textContent.trim())).toEqual([
        String(vuelo.id), vuelo.aerolinea, vuelo.aeropuerto, vuelo.avion,
        vuelo.numeroVuelo, vuelo.asiento, vuelo.codigoReserva,
      ]);
    });
  });
});
