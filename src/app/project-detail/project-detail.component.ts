import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../projects';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';



@Component({
  selector: 'krrli-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  //projects: Projects[];
  project$: Observable<Projects>;
  project: Projects;

  constructor(private projectService: ProjectService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(params.get('id')))
    );

   }

}
