import { ProjectDetailComponent } from './../project-detail/project-detail.component';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from '../projects';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];
  // constructor(private projectService: ProjectService) { }
  constructor(private projectService: ProjectService, private modalService: NgbModal) { }


  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  openDetails(project: Projects) {
    const modalRef = this.modalService.open(ProjectDetailComponent,  { centered: true });
    modalRef.componentInstance.name = 'Detail';
    modalRef.componentInstance.project = project;
  }
  /*
  openDetails(id: string) {
    console.log(id);
    const modalRef = this.modalService.open(ProjectDetailComponent);
    modalRef.componentInstance.name = 'World';
  }
*/

}
