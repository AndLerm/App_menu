import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';  
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ToastrModule } from 'ngx-toastr';

import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { BenvenutoComponent } from './componenti/benvenuto/benvenuto.component';
import { AntipastiComponent } from './componenti/antipasti/antipasti.component';
import { PrimipiattiComponent } from './componenti/primipiatti/primipiatti.component';
import { StartComponent } from './componenti/start/start.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componenti/login/login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AdminPageComponent } from './componenti/admin-page/admin-page.component';
import { environment } from 'src/environments/environment';
import { SecondipiattiComponent } from './componenti/secondipiatti/secondipiatti.component';
import { CardComponent } from './componenti/card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BenvenutoComponent,
    AntipastiComponent,
    PrimipiattiComponent,
    StartComponent,
    LoginComponent,
    AdminPageComponent,
    SecondipiattiComponent,
    CardComponent,
   
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
    TextFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    MaterialFileInputModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
