import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIndividual } from './pagina-individual';

describe('PaginaIndividual', () => {
  let component: PaginaIndividual;
  let fixture: ComponentFixture<PaginaIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaIndividual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIndividual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
