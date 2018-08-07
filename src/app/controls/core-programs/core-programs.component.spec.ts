import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProgramsComponent } from './core-programs.component';

describe('CoreProgramsComponent', () => {
  let component: CoreProgramsComponent;
  let fixture: ComponentFixture<CoreProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
