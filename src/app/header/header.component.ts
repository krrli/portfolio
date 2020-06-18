import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'krrli-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
 }

  ngOnInit() {
  }

}
