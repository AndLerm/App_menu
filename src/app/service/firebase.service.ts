import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  insertPiatto(selectedCategory: string, arg1: { nome: any; descrizione: any; prezzo: any; img: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

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

   deleteData(databaseUrl: string): Observable<any> {
    // Eseguire una richiesta HTTP di tipo "DELETE" al percorso specificato
    return this.http.delete(databaseUrl);
  }
}
