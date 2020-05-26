import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHeart, faCode} from '@fortawesome/free-solid-svg-icons';
import { SkillsComponent } from './skills/skills.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailSliderComponent } from './project-detail-slider/project-detail-slider.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CvComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProjectDetailComponent,
    ProjectDetailSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModalModule
  ],
  exports:[ProjectDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectDetailComponent]

})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCoffee, faGithub, faHeart, faLinkedin, faCode);
  }
}
