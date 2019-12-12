import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public lottieConfig: Object;
  constructor() {
    this.lottieConfig = {
      path: 'assets/loading.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };  
  }

  ngOnInit() {
  }

}
