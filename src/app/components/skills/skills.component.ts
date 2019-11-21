import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private _bottomSheetRef: MatBottomSheetRef<SkillsComponent>) { }

  ngOnInit() {
  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}



  

