import { Component, OnInit}  from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  fader,  ]
})
export class AppComponent implements OnInit {
  
  apiStatus: string
  constructor(private http: HttpClient){}
  title = 'alvaro-test';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(){
    
 
  }
}

