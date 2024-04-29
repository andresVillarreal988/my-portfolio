import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarVisible = true;

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
