import { Observable } from 'rxjs';
import { SkillsService } from './../_services/skills.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../_interfaces/skills';


@Component({
  selector: 'krrli-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skills[];
  frontendSkills: Skills[];
  backendSkills: Skills[];
  methodSkills: Skills[];
  mobileSkills: Skills[];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {


    this.skillsService.getSkillsOrderedByTitle().subscribe(data => {

      this.skills = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          category: e.payload.doc.data()['category'],
          percentage: e.payload.doc.data()['percentage'],
        };
      });

      this.frontendSkills = this.skills.filter(e => e.category === "Frontend");
      this.backendSkills = this.skills.filter(e => e.category === "Backend");
      this.methodSkills = this.skills.filter(e => e.category === "Methodiken");
      this.mobileSkills = this.skills.filter(e => e.category === "Mobile");
    });

  }
}
