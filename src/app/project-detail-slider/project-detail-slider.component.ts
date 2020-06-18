import { Component, OnInit } from '@angular/core';
import { Projects } from '../_interfaces/projects';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../_services/project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { slideInOutAnimation } from '../_animations/index';


@Component({
  selector: 'krrli-project-detail-slider',
  templateUrl: './project-detail-slider.component.html',
  styleUrls: ['./project-detail-slider.component.scss'],
      // make slide in/out animation available to this component
      animations: [slideInOutAnimation],

      // attach the slide in/out animation to the host (root) element of this component
      host: { '[@slideInOutAnimation]': '' }
})
export class ProjectDetailSliderComponent implements OnInit {

  project: Projects;
  project$: Observable<Projects>;

  constructor(private projectService: ProjectService,  private route: ActivatedRoute) {

   }


  ngOnInit() {

    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(params.get('id')))
    );

  }

}
