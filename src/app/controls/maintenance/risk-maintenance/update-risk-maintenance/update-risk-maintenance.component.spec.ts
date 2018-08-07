import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskMaintenanceComponent } from './update-risk-maintenance.component';

describe('UpdateRiskMaintenanceComponent', () => {
  let component: UpdateRiskMaintenanceComponent;
  let fixture: ComponentFixture<UpdateRiskMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRiskMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
