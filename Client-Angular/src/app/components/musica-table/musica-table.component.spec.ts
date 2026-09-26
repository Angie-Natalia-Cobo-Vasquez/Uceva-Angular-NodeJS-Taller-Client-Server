import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MUSICA_MOCK } from '../../mocks/musica.mocks';
import { MusicaTableComponent } from './musica-table.component';

describe('MusicaTableComponent', () => {
  let component: MusicaTableComponent;
  let fixture: ComponentFixture<MusicaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente y renderizar una tabla', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('table'))).toBeTruthy();
  });

  it('debería mostrar una fila por canción y todos sus datos', () => {
    component.musica = MUSICA_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows).toHaveLength(MUSICA_MOCK.length);

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const cancion = MUSICA_MOCK[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(cancion.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(cancion.cancion);
      expect(columns[2].nativeElement.textContent.trim()).toBe(cancion.artista);
      expect(columns[3].nativeElement.textContent.trim()).toBe(cancion.genero);
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(cancion.anio));
    });
  });

  it('debería asignar tipos de badge a los géneros mapeados', () => {
    expect(component.generoMap.Rock).toBe('danger');
    expect(component.generoMap.Pop).toBe('primary');
    expect(component.generoMap.Jazz).toBe('warning');
    expect(component.generoMap['Hip Hop']).toBe('success');
  });
});
