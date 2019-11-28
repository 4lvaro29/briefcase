import { Component, OnInit, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { trigger, transition, useAnimation, state } from '@angular/animations';
import { bounce } from 'ng-animate';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


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
  flipped= true;
  isLinear = false;
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  public show =true;
  constructor(public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet){}
  
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

      // openSkills(): void{
      //   const dialogConfig = new MatDialogConfig();
        
      //   dialogConfig.autoFocus = true;

      //   this.dialog.open(SkillsComponent, dialogConfig);
      // }

  ngOnInit() {
    
  }

  flipIt(){
    this.flipped = !this.flipped;
  }
  openSkills(): void {
    
    this._bottomSheet.open(SkillsComponent);
    
    
  }

  
}





