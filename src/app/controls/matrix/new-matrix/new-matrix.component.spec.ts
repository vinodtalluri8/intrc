import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMatrixComponent } from './new-matrix.component';

describe('NewMatrixComponent', () => {
  let component: NewMatrixComponent;
  let fixture: ComponentFixture<NewMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
