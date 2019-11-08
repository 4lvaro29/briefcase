import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
  MatDialogModule,
  MatFormFieldModule,
  MatChipList,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatInputModule,
  MatTooltipModule,
  MatDividerModule,
  MatStepperModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,
         faEdit,
         faEye,
         faClock,
         faGraduationCap,
         faBriefcase,
         faEnvelope
        } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent,
    MainBriefcaseComponent,
    WorksComponent,
    DialogComponent
    
  ],

  entryComponents: [
    DialogComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatStepperModule,
    MatIconModule,
     
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    DialogComponent
  ],
  
  providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faCoffee);
    library.add(faEye);
    library.add(faClock);
    library.add(faGraduationCap);
    library.add(faBriefcase);
    library.add(faEnvelope);
  }
 }
