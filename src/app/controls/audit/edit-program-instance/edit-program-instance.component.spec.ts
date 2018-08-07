import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgramInstanceComponent } from './edit-program-instance.component';

describe('EditProgramInstanceComponent', () => {
  let component: EditProgramInstanceComponent;
  let fixture: ComponentFixture<EditProgramInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgramInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgramInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
