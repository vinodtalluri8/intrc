import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInternalAuditComponent } from './edit-internal-audit.component';

describe('EditInternalAuditComponent', () => {
  let component: EditInternalAuditComponent;
  let fixture: ComponentFixture<EditInternalAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInternalAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInternalAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
