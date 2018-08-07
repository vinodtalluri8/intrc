import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKeyControlsComponent } from './edit-key-controls.component';

describe('EditKeyControlsComponent', () => {
  let component: EditKeyControlsComponent;
  let fixture: ComponentFixture<EditKeyControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKeyControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKeyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
