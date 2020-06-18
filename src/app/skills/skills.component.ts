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

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {

    this.skillsService.read_Skills().subscribe(data => {

      this.skills = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          category: e.payload.doc.data()['category'],
          percentage: e.payload.doc.data()['percentage'],
        };
      });
      console.log(this.skills);

    });

  }

}
