import { Component , OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MenuService } from '../../menu.service';
import { MenuItem } from '../../menu-item';
import { FirebaseService } from 'src/app/service/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  
  piattiForm: FormGroup;
  menuItem: MenuItem = new MenuItem();
  selectedCategory: string = this.menuItem.categoria;

  

  constructor(public authService: AuthService , private menuService: MenuService, private firebase:FirebaseService, private router: Router, private toastr: ToastrService , private http : HttpClient, private storage: AngularFireStorage) {}
    
  ngOnInit(): void {

    
    this.piattiForm = new FormGroup({
      nome : new FormControl(),
      descrizione : new FormControl(),
      prezzo : new FormControl(),
      categoria : new FormControl(),
      img : new FormControl(),
      
    })
    
  }
  
  isSidenavOpen = false;  
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  
  
  onSubmit(event: any) {
    
    const file = event.target[3].files[0]; // Ottieni il file selezionato
    let filePath = '' + file.name; // percorso Firebase Storage
    const fileRef = this.storage.ref(filePath); // riferimento al file
    this.menuItem = new MenuItem(); // Pulisce il form dopo l'invio
    this.menuService.addMenuItem(this.selectedCategory, this.menuItem);
   
    
    
    // Caricamento file su Firebase Storage
    const task = this.storage.upload(filePath, file);

    // Caricamento img nel database
    task.snapshotChanges().subscribe((snapshot) => {
      if (snapshot.state === 'success') {
        // l'URL del file caricato per visualizzare l'immagine nella card
        fileRef.getDownloadURL().subscribe((url) => {
          // assegnazione URL alla proprietà img
          this.menuItem.img = url;
          
          
          // Inserimento  di piatti nel database! con relativa selezione di categoria
          if (this.selectedCategory === 'antipasti')
          {
            this.firebase.insertAntipasto('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/antipasti.json',
            {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo , img : `${this.menuItem.img}`, id : this.menuItem.id})
            .subscribe(data => {
              filePath = 'antipasti' + file.name; // percorso Firebase Storage 
              this.toastr.success('Antipasto inserito correttamente');
              this.router.navigate(['benvenuto/antipasti']);
              
            }); 
            
          } 
          else if (this.selectedCategory === 'primipiatti')
          {
            this.firebase.insertPrimo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/primipiatti.json', 
            {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo , img : `${this.menuItem.img}`, id : this.menuItem.id})
            .subscribe(data => {
              filePath = 'primipiatti' + file.name; // percorso Firebase Storage               
              this.toastr.success('Piatto inserito correttamente');
              this.router.navigate(['benvenuto/primipiatti']);
            })
            
          }
          else if (this.selectedCategory === 'secondipiatti')
          {
            this.firebase.insertSecondo('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/secondipiatti.json', 
            {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo , img : `${this.menuItem.img}`, id : this.menuItem.id })
            .subscribe(data => {
              filePath = 'secondipiatti' + file.name; // percorso Firebase Storage 
              this.toastr.success('Piatto inserito correttamente');
              this.router.navigate(['benvenuto/secondipiatti']);
            })
            
          }
          else if (this.selectedCategory === 'desserts')
          {
            this.firebase.insertDessert('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/desserts.json', 
            {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo , img : `${this.menuItem.img}`, id : this.menuItem.id })
            .subscribe(data => {
              filePath = 'desserts' + file.name; // percorso Firebase Storage 
              this.toastr.success('Piatto inserito correttamente');
              this.router.navigate(['benvenuto/desserts']);
            })
            
          }
          else if (this.selectedCategory === 'bevande')
          {
            this.firebase.insertBevanda('https://ristorante-sulmare-c9184-default-rtdb.asia-southeast1.firebasedatabase.app/bevande.json', 
            {nome:this.piattiForm.value.nome , descrizione : this.piattiForm.value.descrizione , prezzo : this.piattiForm.value.prezzo , img : `${this.menuItem.img}`, id : this.menuItem.id })
            .subscribe(data => {
              filePath = 'bevande' + file.name; // percorso Firebase Storage 
              this.toastr.success('Bevanda inserita correttamente');
              this.router.navigate(['benvenuto/bevande']);
            })
            
          }
        });
      }
    });

    
    
    
    
  }
  
  
}







