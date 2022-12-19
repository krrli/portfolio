import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faHeart, faCode, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { SkillsComponent } from './skills/skills.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailSliderComponent } from './project-detail-slider/project-detail-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/de';
import {AngularFireModule} from '@angular/fire/compat';




@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CvComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProjectDetailSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModalModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    NgbModule
  ],
  exports: [],
  providers: [
    Title,
    {provide: LOCALE_ID, useValue: 'de-CH'}
  ],
  bootstrap: [AppComponent],
  entryComponents: []

})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCoffee, faGithub, faHeart, faLinkedin, faCode, faChevronLeft);
  }
}
