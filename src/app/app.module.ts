import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  MatStepperModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatNavList,
  MatListModule
}from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap,
         faArrowLeft,
         faExchangeAlt
        } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClient } from 'selenium-webdriver/http';
// import { WorksService } from './services/works.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksService } from './services/works.service';
import { SkillsComponent } from './components/skills/skills.component';
@NgModule({
  declarations: [
    AppComponent,
    MainBriefcaseComponent,
    WorksComponent,
    DialogComponent,
    ExperienceComponent,
    SkillsComponent,    
  ],
  entryComponents: [
    DialogComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatStepperModule,
    MatIconModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    DialogComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue:[] },
    {provide: WorksService}],
    bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(){
    library.add(faGraduationCap);
    library.add(faArrowLeft);
    library.add(faExchangeAlt);
  }
 }
