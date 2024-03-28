import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-Tutors';

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
