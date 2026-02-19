import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGeral } from './pagina-geral';

describe('PaginaGeral', () => {
  let component: PaginaGeral;
  let fixture: ComponentFixture<PaginaGeral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaGeral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGeral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
