import { Component, OnInit, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-main-briefcase',
  templateUrl: './main-briefcase.component.html',
  styleUrls: ['./main-briefcase.component.css']
})
export class MainBriefcaseComponent implements OnInit {
  animal: string;
  name: string;
 
  constructor(public dialog: MatDialog){}
    //  public dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    
      openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '550px',
          data: {name: this.name, animal: this.animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }

  ngOnInit() {
  }

}
