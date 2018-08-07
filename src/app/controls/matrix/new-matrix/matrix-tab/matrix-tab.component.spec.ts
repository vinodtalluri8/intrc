import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixTabComponent } from './matrix-tab.component';

describe('MatrixTabComponent', () => {
  let component: MatrixTabComponent;
  let fixture: ComponentFixture<MatrixTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
