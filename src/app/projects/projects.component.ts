import { Component, OnInit } from '@angular/core';
import projects from '../../assets/projects.json';
import { Projects } from '../projects';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];

  constructor() {}

  ngOnInit() {
    /*
    this.httpClient.get<Projects[]>('assets/projects.json').subscribe(
      data => {
        this.projects = data as Projects[];
      }
    );
    */

    this.projects = projects as Projects[];

  }

  getProject(id: string) {
    return this.projects.filter(p => p.id.includes(id))
    .sort((a,b) => a.id.includes(id) && !b.id.includes(id) ? -1 : b.id.includes(id) && !a.id.includes(id) ? 1 :0);

  }
}
