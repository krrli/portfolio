import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Portfolio Carla Iten';

  constructor(public router: Router, private titleService: Title, private metaService: Meta) {
    this.router.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
           gtag('config', 'UA-169833563-1',
                 {
                   page_path: event.urlAfterRedirects
                 }
                );
        }
     }
  ); }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Portfolio, Software Engineer'},
      {name: 'description', content: 'Hallo! Ich bin Carla, eine Software Ingenieurin aus Luzern. Ich mag Code, ein tolles Team, glückliche User und Kund:innen, ...'},
      {name: 'robots', content: 'index, follow'},
      {name: 'image', content: 'https://carla.land/assets/carla-bw.jpg'}
    ]);
  }

}
