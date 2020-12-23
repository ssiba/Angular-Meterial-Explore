import { Component } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
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
const ELEMENT_DATA: PeriodicElement[] = [
  {SNo: 1, Name: 'Hydrogen', DOB: '12-05-1992', gender: 'male',address:'abc',address1:'abc1',state:'odisha',city:'bbsr',pincode:761007,educationalDetails:'BCA'},
 ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
    ) {
    }

  displayedColumns: string[] = ['SNo','Name','DOB','gender','address','address1','state','city','pincode','educationalDetails','actions'];
  dataSource = ELEMENT_DATA;
  // onViewDetails(id: number) {
  //   this.router.navigate([id], { relativeTo: this.route });
  // }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dataSource = result;
      console.log(`Dialog result: ${result}`);
    });
  }
}
