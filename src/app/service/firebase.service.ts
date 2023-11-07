import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  insertPiatto(selectedCategory: string, arg1: { nome: any; descrizione: any; prezzo: any; img: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  insertAntipasto(url: string, body: {}){
   return this.http.post(url, body)
  }

  getAntipasto(url:string){
    return this.http.get(url)
  }

  insertPrimo(url: string, body: {}){
    return this.http.post(url, body)
   }
 
   getPrimo(url:string){
     return this.http.get(url)
   }

   insertSecondo(url: string, body: {}){
    return this.http.post(url, body)
   }
 
   getSecondo(url:string){
     return this.http.get(url)
   }

   insertDessert(url: string, body: {}){
    return this.http.post(url, body)
   }
 
   getDessert(url:string){
     return this.http.get(url)
   }

   insertBevanda(url: string, body: {}){
    return this.http.post(url, body)
   }
 
   getBevanda(url:string){
     return this.http.get(url)
   }

  eliminaCard(databasePath: string, cardId: string): Observable<void> {
    // Utilizza il metodo remove() di AngularFireDatabase per eliminare la card dal database Firebase.
    return new Observable<void>((observer) => {
      this.db.object(`${databasePath}/${cardId}`)
        .remove()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
