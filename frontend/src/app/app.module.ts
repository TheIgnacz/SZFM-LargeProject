import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {OrderListModule} from 'primeng/orderlist';
import {InputNumberModule} from 'primeng/inputnumber';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { MyFilterPipe } from './questionaire/my-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    KezdolapComponent,
    LoginComponent,
    QuestionaireComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    OrderListModule,
    InputNumberModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
