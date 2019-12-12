import { Component, OnInit}  from '@angular/core';
import { RouterOutlet,
          Router,
          Event as RouterEvent,
          NavigationStart,
          NavigationEnd,
          NavigationCancel,
          NavigationError} from '@angular/router';
import { fader, slideInAnimation } from './route-animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoadingComponent} from './components/loading/loading.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  fader,
  // slideInAnimation
  
  ]

})
export class AppComponent implements OnInit {
  
  apiStatus: string
  public lottieConfig:Object
 
  constructor(private http: HttpClient, private router: Router,private loading: LoadingComponent){ 
  
  }
 
  
  title = 'alvaro-test';
  
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(){
    this.loading
 
  }
 

}

