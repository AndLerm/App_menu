import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDisabledInitialNavigation } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { BenvenutoComponent } from './componenti/benvenuto/benvenuto.component';
import { AntipastiComponent } from './componenti/antipasti/antipasti.component';
import { PrimipiattiComponent } from './componenti/primipiatti/primipiatti.component';
import { StartComponent } from './componenti/start/start.component';
import { LoginComponent } from './componenti/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AdminPageComponent } from './componenti/admin-page/admin-page.component';
const routes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},

  {path: 'adminPage', component: AdminPageComponent},

    {path: 'benvenuto', component: BenvenutoComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch:'full'},
      {path: 'start', component: StartComponent,},
      {path: 'antipasti', component: AntipastiComponent},
      {path: 'primipiatti', component: PrimipiattiComponent},

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
