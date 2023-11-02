import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';




@Component({
  selector: 'app-antipasti',
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.css']
})
export class AntipastiComponent {

  antipasti: MenuItem[] = [];
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
    this.antipasti = this.menuService.getMenuItems('antipasti');
    this.firebase.getAntipasto('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/antipasti.json').subscribe((data : any) =>{
      if (data) {
        this.antipasti = Object.keys(data).map((key) => {
          data[key].isTruncated = true; //per nascondere la descrizione
          this.itemIds.push(key);
          return data[key];
        });
      } else {
        // Tratta il caso in cui data è null o undefined restituendo un array vuoto.
        this.antipasti = [];
      }
    }
    )
  }

  toggleTruncate(antipasto: MenuItem) {
    antipasto.isTruncated = !antipasto.isTruncated;
  }

  deleteItem(itemId: string) {
    const databaseUrl = 'https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app';
    const nodePath = 'antipasti/' + itemId + '.json';
  
    this.firebase.deleteData(`${databaseUrl}/${nodePath}`).subscribe({
      next: () => {
        this.toastr.error('Piatto eliminato con successo!');
        // Puoi aggiornare la vista o fare altre azioni dopo l'eliminazione
        this.getItem()
      },
      error: (error) => {
        console.error('Errore durante l\'eliminazione dell\'elemento:', error);
      }
    });
}
}

