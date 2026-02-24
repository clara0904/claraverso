import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhaCardComponent } from './resenha-card';

describe('ResenhaCard', () => {
  let component: ResenhaCardComponent;
  let fixture: ComponentFixture<ResenhaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenhaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhaCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
