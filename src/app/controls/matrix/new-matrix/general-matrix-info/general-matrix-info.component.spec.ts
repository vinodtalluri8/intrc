import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMatrixInfoComponent } from './general-matrix-info.component';

describe('GeneralMatrixInfoComponent', () => {
  let component: GeneralMatrixInfoComponent;
  let fixture: ComponentFixture<GeneralMatrixInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMatrixInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMatrixInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
