import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { LoginComponent } from './login/login.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';

const routes: Routes = [
  {path: '', redirectTo:'/kezdolap', pathMatch: 'full'},
  {path: 'kezdolap', component: KezdolapComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'questionaire/:id/:user', component: QuestionaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
