import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css']
})
export class BenvenutoComponent {
  @ViewChild('drawer')
  drawer!: MatDrawer;
  isDrawerOpen: boolean = false;

  toggleDrawer() {
    this.drawer.toggle();
    this.isDrawerOpen = this.drawer.opened;
  }
}


