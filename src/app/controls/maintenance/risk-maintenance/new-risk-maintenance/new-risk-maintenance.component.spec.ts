import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRiskMaintenanceComponent } from './new-risk-maintenance.component';

describe('NewRiskMaintenanceComponent', () => {
  let component: NewRiskMaintenanceComponent;
  let fixture: ComponentFixture<NewRiskMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRiskMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRiskMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
