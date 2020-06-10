import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../jobs';

@Component({
  selector: 'krrli-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  jobs: Jobs[];
  jobsJson = 'assets/jobs.json';


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
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
