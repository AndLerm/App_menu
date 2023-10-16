import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MenuService } from '../../menu.service';
import { MenuItem } from '../../menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  piattiForm: FormGroup;
  menuItem: MenuItem = new MenuItem();
  selectedCategory: string = this.menuItem.categoria;
  
@Output () add = new EventEmitter
  constructor(public authService: AuthService , private menuService: MenuService, private firebase:FirebaseService, private router: Router, private toastr: ToastrService) {}


  ngOnInit(): void {
    this.piattiForm = new FormGroup({
      nome : new FormControl(),
      descrizione : new FormControl(),
      prezzo : new FormControl(),
      categoria : new FormControl(),
    })
  }

  
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onSubmit() {
    this.menuItem = new MenuItem(); // Pulisce il form dopo l'invio
    this.menuService.addMenuItem(this.selectedCategory, this.menuItem);
   
    
    if (this.selectedCategory === 'antipasti')
        { 
          this.firebase.insertAntipasto('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/antipasti.json', 
          {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo })
          .subscribe(data => {
            this.toastr.success('Piatto inserito correttamente');
            this.router.navigate(['benvenuto/antipasti']);

          });
        } 
          else if (this.selectedCategory === 'primipiatti')
        {
          this.firebase.insertPrimo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/primipiatti.json', 
        {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo })
        .subscribe(data => {
          this.toastr.success('Piatto inserito correttamente');
          this.router.navigate(['benvenuto/primipiatti']);
        })
        
        }
        else if (this.selectedCategory === 'secondipiatti')
        {
          this.firebase.insertSecondo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/secondipiatti.json', 
          {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo })
          .subscribe(data => {
            this.toastr.success('Piatto inserito correttamente');
            this.router.navigate(['benvenuto/secondipiatti']);
          })
           
        }
      }
}


