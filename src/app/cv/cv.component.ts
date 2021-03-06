import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../_interfaces/jobs';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  jobs: Jobs[];
  jobsJson = 'assets/jobs.json';


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get<Jobs[]>('assets/jobs.json').subscribe(
      jobData => {
        this.jobs = jobData as Jobs[];
      }
    );
  }

  public dateTo(dateTo): boolean {
    if (dateTo === '') {
      return false;
    }
    return true;

  }


}
