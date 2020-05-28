import { Education } from './../_interfaces/education';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'krrli-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: Education[];
  educationJson = 'assets/education.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Education[]>('assets/education.json').subscribe(
      eduData => {
        this.education = eduData as Education[];
      }
    );
  }

  public dateToIsEmpty(dateTo: string): boolean {
    if (dateTo === '') {
      return false;
    }
    return true;
  }

}
