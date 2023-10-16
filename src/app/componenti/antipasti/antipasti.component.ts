import { Component } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-antipasti',
  templateUrl: './antipasti.component.html',
  styleUrls: ['./antipasti.component.css']
})
export class AntipastiComponent {


  antipasti: MenuItem[] = [];

  constructor(private menuService: MenuService, private firebase:FirebaseService, private toastr: ToastrService) {}


  itemIds: string[] = [];


  ngOnInit() {
    this.getItem()
  }

  getItem(){
    this.antipasti = this.menuService.getMenuItems('antipasti');
    this.firebase.getAntipasto('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/antipasti.json').subscribe((data : any) =>{
      if (data) {
        this.antipasti = Object.keys(data).map((key) => {
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

  deleteItem(itemId: string) {
    const databaseUrl = 'https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app';
    const nodePath = 'antipasti/' + itemId + '.json';
  
    this.firebase.deleteData(`${databaseUrl}/${nodePath}`).subscribe({
      next: () => {
        this.toastr.error('Piatto eliminato con successo!');
        // Puoi aggiornare la vista o fare altre azioni dopo l'eliminazione
        this.getItem()
        this.antipasti = this.menuService.getMenuItems('antipasti');
      },
      error: (error) => {
        console.error('Errore durante l\'eliminazione dell\'elemento:', error);
      }
    });
}
}
