import { TimelineComponent } from './timeline/timeline.component';
import { EducationComponent } from './education/education.component';
import { ProjectDetailSliderComponent } from './project-detail-slider/project-detail-slider.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { HelloComponent } from './hello/hello.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'education', component: EducationComponent},
  // {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'project-detail/:id', component: ProjectDetailComponent},
  {path: 'project-detail-slider/:id', component: ProjectDetailSliderComponent},
  {path: '', redirectTo: '/hello', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
