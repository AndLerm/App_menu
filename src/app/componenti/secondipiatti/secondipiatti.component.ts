import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';




@Component({
  selector: 'app-secondipiatti',
  templateUrl: './secondipiatti.component.html',
  styleUrls: ['./secondipiatti.component.css']
})
export class SecondipiattiComponent {
  secondipiatti: MenuItem[] = [];
  isTruncated : boolean = true;
  cardTypePath: string = 'secondipiatti';


  constructor(private menuService: MenuService, private firebase:FirebaseService, private toastr: ToastrService, private authService: AuthService) {}


  itemIds: string[] = [];


  ngOnInit() {
    this.getItem()
  }

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  getItem(){
    this.secondipiatti = this.menuService.getMenuItems('secondipiatti');
    this.firebase.getPrimo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/secondipiatti.json').subscribe((data : any) =>{
      if (data) {
        this.secondipiatti = Object.keys(data).map((key) => {
          data[key].isTruncated = true; //per nascondere la descrizione
          data[key].id = key;
          this.itemIds.push(key);
          return data[key];
        });
      } else {
        // Tratta il caso in cui data è null o undefined restituendo un array vuoto.
        this.secondipiatti = [];
      }
    }
    )
  }
  toggleTruncate(secondo: MenuItem) {
    secondo.isTruncated = !secondo.isTruncated;
  }

  onCardDeleted(cardId: string) {
    this.getItem();
  }
}

