import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../projects';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'krrli-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projects: Projects[];
  project: Observable<Projects>;

  constructor(private httpClient: HttpClient,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //TODO: Service schreiben um Projects zu holen
    /*
    this.project = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
    */
    this.httpClient.get<Projects[]>('assets/projects.json').subscribe(
      data => {
        this.projects = data as Projects[];
      }
    );
  }

}
