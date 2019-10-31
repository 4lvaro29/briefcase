import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-main-briefcase',
  templateUrl: './main-briefcase.component.html',
  styleUrls: ['./main-briefcase.component.css']
})
export class MainBriefcaseComponent implements OnInit {
  
  animal: string;
  name: string;   
  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
  }

}
