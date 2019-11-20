import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animations';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    slideInAnimation,
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
