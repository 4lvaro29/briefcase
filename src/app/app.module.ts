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
  MatListModule,
  MatProgressSpinnerModule
}from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap,
         faArrowLeft,
         faExchangeAlt,
         faBuilding,
         faUserGraduate
        } from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { DialogComponent } from './components/dialog/dialog.component';
import { HttpClient } from 'selenium-webdriver/http';
// import { WorksService } from './services/works.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksService } from './services/works.service';
import { SkillsComponent } from './components/skills/skills.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LottieAnimationViewModule } from 'ng-lottie';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    MainBriefcaseComponent,
    WorksComponent,
    DialogComponent,
    ExperienceComponent,
    SkillsComponent,
    LoadingComponent, 
  ],
  entryComponents: [
    DialogComponent,
    ExperienceComponent,
    SkillsComponent,
    LoadingComponent
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
    MatListModule,
    NgImageSliderModule,
    LottieAnimationViewModule.forRoot(),
    MatProgressSpinnerModule
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
    {provide: LoadingComponent, useValue: {}},
    { provide: MAT_DIALOG_DATA, useValue:[] },
    {provide: WorksService}],
    bootstrap: [AppComponent],
  
})
export class AppModule {
  constructor(){
    library.add(faBuilding)
    library.add(faGraduationCap);
    library.add(faUserGraduate)
    dom.watch()
    library.add(faArrowLeft);
    library.add(faExchangeAlt);
  }
  
 }
