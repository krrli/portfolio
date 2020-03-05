import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Projects } from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Projects[]>('assets/projects.json').subscribe(
      data => {
        this.projects = data as Projects[];
      }
    );  
  }

}
