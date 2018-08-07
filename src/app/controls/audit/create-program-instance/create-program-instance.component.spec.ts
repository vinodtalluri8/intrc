import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramInstanceComponent } from './create-program-instance.component';

describe('CreateProgramInstanceComponent', () => {
  let component: CreateProgramInstanceComponent;
  let fixture: ComponentFixture<CreateProgramInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProgramInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgramInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
