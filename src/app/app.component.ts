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
  loading:boolean = true;
  
  constructor(private http: HttpClient, private router: Router){this.lottieConfig = {
    path: 'assets/loading.json',
    autoplay: 'true',
    loop: 'true'
  }
  router.events.subscribe((event: RouterEvent) => {
    this.navigationInterceptor(event)
  })};
  
  title = 'alvaro-test';
  
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(){

 
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

}

