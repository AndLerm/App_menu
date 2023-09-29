import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';



@Component({
  selector: 'app-secondipiatti',
  templateUrl: './secondipiatti.component.html',
  styleUrls: ['./secondipiatti.component.css']
})
export class SecondipiattiComponent {
  secondipiatti:any;


  constructor(private menuService: MenuService, private firebase:FirebaseService) {}
  

  

  ngOnInit() {
    this.secondipiatti = this.menuService.getMenuItems('secondipiatti');
    this.firebase.getSecondo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/secondipiatti.json').subscribe((data : any) =>{
      this.secondipiatti = Object.keys(data).map((key)=> {return data [key]})
      
    })
  }

}
