import { HttpClient } from '@angular/common/http';
import { Projects } from './projects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import projects from '../assets/projects.json';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  constructor() {}


  getProjects(): Projects[] {
    return projects as Projects[];
  }



  getProject(id: string) {
    return this.getProjects().filter(p => p.id.includes(id))
    .sort((a,b) => a.id.includes(id) && !b.id.includes(id) ? -1 : b.id.includes(id) && !a.id.includes(id) ? 1 :0);

  }


}
