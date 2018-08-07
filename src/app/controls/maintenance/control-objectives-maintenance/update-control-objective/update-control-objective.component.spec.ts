import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateControlObjectiveComponent } from './update-control-objective.component';

describe('UpdateControlObjectiveComponent', () => {
  let component: UpdateControlObjectiveComponent;
  let fixture: ComponentFixture<UpdateControlObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateControlObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateControlObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
