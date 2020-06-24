import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio';

  constructor(public router: Router) {
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

}
