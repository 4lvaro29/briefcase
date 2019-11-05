import { Component, OnInit, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, flip, zoomInLeft } from 'ng-animate';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-main-briefcase',
  templateUrl: './main-briefcase.component.html',
  styleUrls: ['./main-briefcase.component.css'],
  animations: [trigger('bounce',
              [transition('* => *', useAnimation(bounce,{params: {timing: 2, delay: 1}
              }))]),
              trigger('flip',[transition('* => *', useAnimation(flip,{params: {timing: 1, delay: 2}
              }))]),
              trigger('zoomInLeft',[transition('* => *', useAnimation(zoomInLeft
              ))])
],

})
export class MainBriefcaseComponent implements OnInit {
  animal: string;
  name: string;
  isLinear = false;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
 
  constructor(public dialog: MatDialog){}
    
      openDialog(): void {
       
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '90%',
          height: 'auto',
          data: {name: this.name,
          animal: this.animal
          
        }
        
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }

  ngOnInit() {
  }


}
