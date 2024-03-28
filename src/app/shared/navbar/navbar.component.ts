import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor( private _dialog : MatDialog){}

  openEmployeeForm(){
    const dialogRef = this._dialog.open(DashboardComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          // this.getEmployeeList();
        }
      }
     })
    }


}
