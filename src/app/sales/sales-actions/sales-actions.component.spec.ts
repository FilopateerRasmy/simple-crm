import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesActionsComponent } from './sales-actions.component';

describe('SalesActionsComponent', () => {
  let component: SalesActionsComponent;
  let fixture: ComponentFixture<SalesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
