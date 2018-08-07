import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectivesMaintenanceComponent } from './control-objectives-maintenance.component';

describe('ControlObjectivesMaintenanceComponent', () => {
  let component: ControlObjectivesMaintenanceComponent;
  let fixture: ComponentFixture<ControlObjectivesMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlObjectivesMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlObjectivesMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
