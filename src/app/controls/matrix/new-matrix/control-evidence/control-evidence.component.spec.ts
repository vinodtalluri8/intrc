import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEvidenceComponent } from './control-evidence.component';

describe('ControlEvidenceComponent', () => {
  let component: ControlEvidenceComponent;
  let fixture: ComponentFixture<ControlEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
