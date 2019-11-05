import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBriefcaseComponent } from './components/main-briefcase/main-briefcase.component';
import { WorksComponent } from './components/works/works.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
  { path: '', component: MainBriefcaseComponent },
  { path: 'app-works', component: WorksComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
     {path: '', component: MainBriefcaseComponent},
     {path: 'app-works', component: WorksComponent},

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
