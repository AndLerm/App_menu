import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';


@Component({
  selector: 'app-primipiatti',
  templateUrl: './primipiatti.component.html',
  styleUrls: ['./primipiatti.component.css']
})
export class PrimipiattiComponent {
  primipiatti:any;
  

  constructor(private menuService: MenuService, private firebase:FirebaseService) {}
  

  

  ngOnInit() {
    this.primipiatti = this.menuService.getMenuItems('primipiatti');
    this.firebase.getPrimo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/primipiatti.json').subscribe((data : any) =>{
      this.primipiatti = Object.keys(data).map((key)=> {return data [key]})
      console.log(this.primipiatti)
      
    })
  }
  }

