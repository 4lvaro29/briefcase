import { Component, OnInit } from '@angular/core';
import {WorksService} from '../../services/works.service'
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/services/config';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],

})
export class WorksComponent implements OnInit {
  public api_url:string=API_URL;

  
  
  constructor(private worksService: WorksService,
    private http: HttpClient) { }

  ngOnInit() {
    
  }

  

}
