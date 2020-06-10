import { ProjectService } from '../_services/project.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from '../_interfaces/projects';
import { slideInOutAnimation  } from '../_animations/index';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
    // make slide in/out animation available to this component
    // animations: [slideInOutAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    // host: { '[@slideInOutAnimation]': '' }
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];
  // constructor(private projectService: ProjectService) { }
  constructor(private projectService: ProjectService, private modalService: NgbModal) { }


  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }



}
