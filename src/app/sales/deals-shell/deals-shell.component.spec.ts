import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsShellComponent } from './deals-shell.component';

describe('DealsShellComponent', () => {
  let component: DealsShellComponent;
  let fixture: ComponentFixture<DealsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
