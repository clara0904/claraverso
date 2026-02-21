import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheResenha } from './detalhe-resenha';

describe('DetalheResenha', () => {
  let component: DetalheResenha;
  let fixture: ComponentFixture<DetalheResenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheResenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheResenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
