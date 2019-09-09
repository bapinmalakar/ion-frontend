import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThermoViewComponent } from './all-thermo-view.component';

describe('AllThermoViewComponent', () => {
  let component: AllThermoViewComponent;
  let fixture: ComponentFixture<AllThermoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllThermoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllThermoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
