import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternalAuditComponent } from './create-internal-audit.component';

describe('CreateInternalAuditComponent', () => {
  let component: CreateInternalAuditComponent;
  let fixture: ComponentFixture<CreateInternalAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInternalAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInternalAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
