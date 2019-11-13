import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BASE_URL, API_URL} from "./config";



@Injectable()
export class WorksService {
  public api_url:string=API_URL;
 

  constructor(private http: HttpClient) { }

  

  ngOnInit(): void {
  
  }
  
  getWorks(){
    return this.http.get(`${this.api_url}/works`);
  
  }
}
