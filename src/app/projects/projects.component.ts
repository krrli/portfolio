import { ProjectDetailComponent } from './../project-detail/project-detail.component';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];

  constructor(private projectService: ProjectService) { }

  //constructor(private projectService: ProjectService, private modalService: NgbModal) { }


  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }

  /*
  open() {
    const modalRef = this.modalService.open(ProjectDetailComponent);
    modalRef.componentInstance.name = 'World';
  }
  */

}
