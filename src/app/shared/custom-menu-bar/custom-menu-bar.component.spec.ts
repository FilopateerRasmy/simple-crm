import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuBarComponent } from './custom-menu-bar.component';

describe('CustomMenuBarComponent', () => {
  let component: CustomMenuBarComponent;
  let fixture: ComponentFixture<CustomMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
