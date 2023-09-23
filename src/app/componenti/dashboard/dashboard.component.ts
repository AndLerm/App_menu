import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


declare var anime: any; // Dichiarazione di anime.js


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
    constructor(private authService: AuthService){}
    isUserLoggedIn() : boolean{
      return this.authService.isLoggedIn; 
    }

    ngOnInit(){

      
      // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



    anime.timeline({loop: true})
      .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 70*i,
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 3000,
        easing: "easeOutExpo",
        delay: 1000
        
      });
    
}
    }





