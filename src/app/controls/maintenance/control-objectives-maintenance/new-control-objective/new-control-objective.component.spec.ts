import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewControlObjectiveComponent } from './new-control-objective.component';

describe('NewControlObjectiveComponent', () => {
  let component: NewControlObjectiveComponent;
  let fixture: ComponentFixture<NewControlObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewControlObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewControlObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
