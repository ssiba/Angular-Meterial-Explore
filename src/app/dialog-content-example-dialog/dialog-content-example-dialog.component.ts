import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
export interface PeriodicElement {
  
  SNo: number;
  Name:string;
  DOB:any;
  gender:string;
  address:string;
  address1:string;
  state:string;
  city:string;
  pincode:number;
  educationalDetails:string
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {

  constructor(
    public casesDialog: MatDialogRef<DialogContentExampleDialogComponent>,
  ) { }

  ngOnInit(): void {
  }
   ELEMENT_DATA_ONE: PeriodicElement[] = [
    {SNo: 1, Name: 'Hydrogen', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
    {SNo: 2, Name: 'Siba', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
    {SNo: 3, Name: 'Harsha', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
  
   ];
    ELEMENT_DATA_TWO: PeriodicElement[] = [
    {SNo: 1, Name: 'mohan', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
    {SNo: 2, Name: 'gg', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
    {SNo: 3, Name: 'kuna', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
  
   ];
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  displayedColumns: string[] = ['SNo','Name','DOB','gender','address','address1','state','city','pincode','educationalDetails','actions'];
  // dataSource = ELEMENT_DATA_ONE;
  saveDilogData(){
 console.log(this.done);
 this.casesDialog.close(this.ELEMENT_DATA_TWO);

  }
}
