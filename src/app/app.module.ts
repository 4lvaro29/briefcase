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
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule
    
  ],
  exports: [
    MatCardModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
