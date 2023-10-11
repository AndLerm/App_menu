import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';


@Component({
  selector: 'app-antipasti',
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.css']
})
export class AntipastiComponent {


  antipasti: MenuItem[] = [];

  constructor(private menuService: MenuService, private firebase:FirebaseService) {}

  ngOnInit() {
    this.antipasti = this.menuService.getMenuItems('antipasti');
    this.firebase.getAntipasto('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/antipasti.json').subscribe((data : any) =>{
      this.antipasti = Object.keys(data).map((key)=> {return data [key]})
      console.log(this.antipasti)
      
    })
  }
}
