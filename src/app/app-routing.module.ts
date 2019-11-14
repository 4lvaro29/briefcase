import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBriefcaseComponent } from './components/main-briefcase/main-briefcase.component';
import { WorksComponent } from './components/works/works.component';




const routes: Routes = [
  { path: '', component: MainBriefcaseComponent, data:{animation:'HomePage'}},
  { path: 'app-works', component: WorksComponent,  data: {animation:'AboutPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
