import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Skills } from '../_interfaces/skills';

@Component({
  selector: 'krrli-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  //skills: Skills[];
  skills: Observable<Skills[]>;
  //methods: Skills[] = this.skills.pipe(filter(skill => console.log(skill.category)));
  tools: Skills[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/skills.json').subscribe(
      skillData => {
        this.skills = skillData as Observable<Skills[]>;
      }
    );

  }

}
