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
  title = 'it`s carla';

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
      {name: 'description', content: 'Hallo! Ich bin Carla, eine Software Ingenieurin aus Luzern. Ich mag Code, ...'},
      {name: 'robots', content: 'index, follow'},
      {name: 'image', content: 'https://carla.land/assets/carla-bw.jpg'},

      // Open Graph / Facebook
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: 'https://carla.land/'},
      {name: 'og:title', content: 'Portfolio Carla Iten'},
      {name: 'og:description', content: 'Hallo! Ich bin Carla, eine Software Ingenieurin aus Luzern. Ich mag Code, ...'},
      {name: 'og:image', content: 'https://carla.land/assets/carla-bw.jpg'},

      // Twitter
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:url', content: 'https://carla.land/'},
      {name: 'twitter:title', content: 'Portfolio Carla Iten'},
      {name: 'twitter:description', content: 'Hallo! Ich bin Carla, eine Software Ingenieurin aus Luzern. Ich mag Code, ...'},
      {name: 'twitter:image', content: 'https://carla.land/assets/carla-bw.jpg'}
    ]);
  }

}
