import { Component, OnInit, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { trigger, transition, useAnimation, state } from '@angular/animations';
import { bounce } from 'ng-animate';




@Component({
  selector: 'app-main-briefcase',
  templateUrl: './main-briefcase.component.html',
  styleUrls: ['./main-briefcase.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1, delay: 1 }
    }))])
],

})
export class MainBriefcaseComponent implements OnInit {
  bounce: any;
  flipped= false;
  avatar = ''
  isLinear = false;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
 
  constructor(public dialog: MatDialog){}
  
      openDialog(): void {    
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '90%',
          height: 'auto',
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          return result;
        });
      }

  ngOnInit() {
    
  }

  flipIt(){
    this.flipped = !this.flipped;
  }


}
