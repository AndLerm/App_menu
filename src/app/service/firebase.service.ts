import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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
}
