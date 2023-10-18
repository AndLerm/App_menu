import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-primipiatti',
  templateUrl: './primipiatti.component.html',
  styleUrls: ['./primipiatti.component.css']
})
export class PrimipiattiComponent {
  
  primipiatti: MenuItem[] = [];
  isTruncated : boolean = true;

  constructor(private menuService: MenuService, private firebase:FirebaseService, private toastr: ToastrService, private authService: AuthService) {}


  itemIds: string[] = [];


  ngOnInit() {
    this.getItem()
  }
  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  getItem(){
    this.primipiatti = this.menuService.getMenuItems('primipiatti');
    this.firebase.getPrimo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/primipiatti.json').subscribe((data : any) =>{
      if (data) {
        this.primipiatti = Object.keys(data).map((key) => {
          data[key].isTruncated = true; //per nascondere la descrizione
          this.itemIds.push(key);
          return data[key];
        });
      } else {
        // Tratta il caso in cui data è null o undefined restituendo un array vuoto.
        this.primipiatti = [];
      }
    }
    )
  }

  toggleTruncate(primo: MenuItem) {
    primo.isTruncated = !primo.isTruncated;
  }

  deleteItem(itemId: string) {
    const databaseUrl = 'https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app';
    const nodePath = 'primipiatti/' + itemId + '.json';
  
    this.firebase.deleteData(`${databaseUrl}/${nodePath}`).subscribe({
      next: () => {
        this.toastr.error('Piatto eliminato con successo!');
        // Puoi aggiornare la vista o fare altre azioni dopo l'eliminazione
        this.getItem()
        this.primipiatti = this.menuService.getMenuItems('primipiatti');
      },
      error: (error) => {
        console.error('Errore durante l\'eliminazione dell\'elemento:', error);
      }
    });
}
}

  

