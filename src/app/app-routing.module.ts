import { ProjectDetailSliderComponent } from './project-detail-slider/project-detail-slider.component';
import { SkillsComponent } from './skills/skills.component';
import { HelloComponent } from './hello/hello.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'project-detail-slider/:id', component: ProjectDetailSliderComponent},
  {path: '', redirectTo: '/hello', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
