import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExplorar } from './navbar-explorar';

describe('NavbarExplorar', () => {
  let component: NavbarExplorar;
  let fixture: ComponentFixture<NavbarExplorar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarExplorar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarExplorar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
