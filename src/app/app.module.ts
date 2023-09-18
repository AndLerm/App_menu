import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';  
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 


import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { BenvenutoComponent } from './componenti/benvenuto/benvenuto.component';
import { AntipastiComponent } from './componenti/antipasti/antipasti.component';
import { PrimipiattiComponent } from './componenti/primipiatti/primipiatti.component';
import { StartComponent } from './componenti/start/start.component'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BenvenutoComponent,
    AntipastiComponent,
    PrimipiattiComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    TextFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
