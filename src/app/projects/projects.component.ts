import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }


}
