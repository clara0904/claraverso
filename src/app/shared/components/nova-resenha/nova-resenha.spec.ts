import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaResenha } from './nova-resenha';

describe('NovaResenha', () => {
  let component: NovaResenha;
  let fixture: ComponentFixture<NovaResenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaResenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaResenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
