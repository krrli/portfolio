import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Jobs } from '../jobs';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  jobs: Jobs[];


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('assets/jobs.json').subscribe(
      jobData => {
        this.jobs = jobData as Jobs[];

      }
    );
  }

}
