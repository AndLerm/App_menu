import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css']
})
export class BenvenutoComponent {
  constructor(private authService: AuthService){}
  isUserLoggedIn() : boolean{
    return this.authService.isLoggedIn; 
  }

  @ViewChild('drawer')
  drawer!: MatDrawer;
  isDrawerOpen: boolean = false;
  

  toggleDrawer() {
    this.drawer.toggle();
    this.isDrawerOpen = this.drawer.opened;
  }
}


