import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoreProgramComponent } from './edit-core-program.component';

describe('EditCoreProgramComponent', () => {
  let component: EditCoreProgramComponent;
  let fixture: ComponentFixture<EditCoreProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoreProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoreProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
