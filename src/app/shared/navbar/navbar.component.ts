import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RegisterComponentComponent } from 'src/app/register-component/register-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  @ViewChild('navbarCollapse') navbarCollapse !: ElementRef;


  constructor(private renderer: Renderer2) { }

  toggleNavbar() {
    const navbar = this.navbarCollapse.nativeElement;
    if (navbar.classList.contains('show')) {
      this.renderer.removeClass(navbar, 'show');
    } else {
      this.renderer.addClass(navbar, 'show');
    }
  }


}
