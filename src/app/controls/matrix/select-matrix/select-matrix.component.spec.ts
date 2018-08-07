import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMatrixComponent } from './select-matrix.component';

describe('SelectMatrixComponent', () => {
  let component: SelectMatrixComponent;
  let fixture: ComponentFixture<SelectMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
