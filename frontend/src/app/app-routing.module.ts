import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';

const routes: Routes = [
  {path: '', redirectTo:'/kezdolap', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'kezdolap', component: KezdolapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
