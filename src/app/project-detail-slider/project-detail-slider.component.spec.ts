import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailSliderComponent } from './project-detail-slider.component';

describe('ProjectDetailSliderComponent', () => {
  let component: ProjectDetailSliderComponent;
  let fixture: ComponentFixture<ProjectDetailSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
