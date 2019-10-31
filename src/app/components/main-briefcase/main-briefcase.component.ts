import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-main-briefcase',
  templateUrl: './main-briefcase.component.html',
  styleUrls: ['./main-briefcase.component.css']
})
export class MainBriefcaseComponent implements OnInit {
  
  availableColors: ChipColor[] = [
    {name: 'none', color: 'primary'},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'primary'},
    {name: 'Warn', color: 'primary'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
