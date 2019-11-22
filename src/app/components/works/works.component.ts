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
  public abejaNegraLogo = "https://4lvaro.s3.amazonaws.com/book/logo.png";
  public envaseAbeja = "https://4lvaro.s3.amazonaws.com/book/envase2_abeja_negra.jpg";

  
  
  constructor(private worksService: WorksService,
    private http: HttpClient) { }

  ngOnInit() {
    
  }

  

}
