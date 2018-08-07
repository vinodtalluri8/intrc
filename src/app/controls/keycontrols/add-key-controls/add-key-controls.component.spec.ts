import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeyControlsComponent } from './add-key-controls.component';

describe('AddKeyControlsComponent', () => {
  let component: AddKeyControlsComponent;
  let fixture: ComponentFixture<AddKeyControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddKeyControlsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
