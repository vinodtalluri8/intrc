import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycontrolsComponent } from './keycontrols.component';

describe('KeycontrolsComponent', () => {
  let component: KeycontrolsComponent;
  let fixture: ComponentFixture<KeycontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeycontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeycontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
