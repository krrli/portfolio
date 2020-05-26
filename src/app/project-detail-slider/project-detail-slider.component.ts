import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'krrli-project-detail-slider',
  templateUrl: './project-detail-slider.component.html',
  styleUrls: ['./project-detail-slider.component.scss']
})
export class ProjectDetailSliderComponent implements OnInit {

  project: Projects;
  project$: Observable<Projects>;

  constructor(private projectService: ProjectService,  private route: ActivatedRoute) {
    console.log(this.project);
   }


  ngOnInit() {

    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(params.get('id')))
    );

  }

}
