import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../menu.service';
import { MenuItem } from 'src/app/menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: MenuItem;
  @Input() isTruncated: boolean;
  @Input() itemIds: string[];
  @Input() selectedCategory: string;
  @Input() databasePath: string;
  @Output() cardDeleted = new EventEmitter<string>();
  
  
  constructor(private menuService: MenuService, private firebase:FirebaseService, private toastr: ToastrService, private authService: AuthService) {}
  
  ngOnInit(){
    
  }
  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  
  
  toggleTruncate(antipasto: MenuItem) {
    antipasto.isTruncated = !antipasto.isTruncated;
  }
  
  eliminaCard(item: MenuItem) {
    if (item.id) {
      // Utilizza this.databasePath per determinare il percorso specifico del database.
      const databasePath = this.databasePath;
      
      this.firebase.eliminaCard(databasePath, item.id).subscribe(
        () => {
          // Rimuovi la card dall'array locale se la chiamata ha successo
          const index = this.itemIds.indexOf(item.id);
          if (index !== -1) {
            this.itemIds.splice(index, 1);
          }
          this.cardDeleted.emit(item.id);
          this.toastr.error('Elemento eliminato');
        },
        (error) => {
          // Gestisci eventuali errori nella chiamata al servizio.
          console.error('Errore', error);
        }
        );
      }
    }
    


    testo:string;
    primaLetteraMaiuscola(testo: string): string {
  return testo.charAt(0).toUpperCase() + testo.slice(1);
}

}