import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBriefcaseComponent } from './components/main-briefcase/main-briefcase.component';
import { WorksComponent } from './components/works/works.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule,
  MatChipList
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,
         faEdit,
         faEye,
         faClock,
         faGraduationCap,
         faBriefcase
        } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
@NgModule({
  declarations: [
    AppComponent,
    MainBriefcaseComponent,
    WorksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule
    
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faCoffee);
    library.add(faEye);
    library.add(faClock);
    library.add(faGraduationCap);
    library.add(faBriefcase);
  }
 }
