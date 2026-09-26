import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LIBROS_MOCK } from '../../mocks/libros.mocks';
import { LibrosTableComponent } from './libros-table.component';

describe('LibrosTableComponent', () => {
  let component: LibrosTableComponent;
  let fixture: ComponentFixture<LibrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada libro', () => {
    component.libros = LIBROS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.libros.length);
  });

  it('debería mostrar los datos del libro en cada columna', () => {
    component.libros = LIBROS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const libro = component.libros[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(libro.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(libro.titulo);
      expect(columns[2].nativeElement.textContent.trim()).toBe(libro.autor);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(libro.anio));
    });
  });

  it('debería mapear cada género a su BadgeType correcto', () => {
    expect(component.generoMap['Novela']).toBe('primary');
    expect(component.generoMap['Ciencia Ficcion']).toBe('success');
    expect(component.generoMap['Fantasia']).toBe('warning');
    expect(component.generoMap['Misterio']).toBe('danger');
  });

});
