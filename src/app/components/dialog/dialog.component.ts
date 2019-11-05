import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material'
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInY } from 'ng-animate';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  // animations: [trigger('flipInY', [transition('* => *', useAnimation(flipInY))])
  // ],
})
export class DialogComponent {

  animal: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}





