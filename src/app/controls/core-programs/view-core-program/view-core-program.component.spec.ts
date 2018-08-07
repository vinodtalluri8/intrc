import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoreProgramComponent } from './view-core-program.component';

describe('ViewCoreProgramComponent', () => {
  let component: ViewCoreProgramComponent;
  let fixture: ComponentFixture<ViewCoreProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoreProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoreProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
