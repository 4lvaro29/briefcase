import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBriefcaseComponent } from './main-briefcase.component';

describe('MainBriefcaseComponent', () => {
  let component: MainBriefcaseComponent;
  let fixture: ComponentFixture<MainBriefcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBriefcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
