import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhaCard } from './resenha-card';

describe('ResenhaCard', () => {
  let component: ResenhaCard;
  let fixture: ComponentFixture<ResenhaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenhaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
