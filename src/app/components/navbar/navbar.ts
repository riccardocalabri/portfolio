import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  closeMenu() {
    const navbar = document.getElementById('nav');
    if (!navbar) return;

    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    bsCollapse.hide();
  }

}
