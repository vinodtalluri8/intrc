import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoreProgramComponent } from './add-core-program.component';

describe('AddCoreProgramComponent', () => {
  let component: AddCoreProgramComponent;
  let fixture: ComponentFixture<AddCoreProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoreProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoreProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
