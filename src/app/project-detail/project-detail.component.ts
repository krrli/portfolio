import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../projects';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'krrli-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  //project$: Observable<Projects>;
  project: Projects;

  constructor(private projectService: ProjectService,  private route: ActivatedRoute,
    private router: Router,  public activeModal: NgbActiveModal    ) { }

  ngOnInit() {

    // is it better to hand the whole project over or just the id?
    /*
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(params.get('id')))
    );
    */
   }

}
