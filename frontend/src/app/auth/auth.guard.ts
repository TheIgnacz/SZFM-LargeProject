import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import {CanActivate, Router } from '@angular/router';
import { SendingService } from '../services/sending.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  loggedin:boolean|any=false
  constructor(private router:Router, private sendingService: SendingService){}
  
  async canActivate():Promise<boolean>{
    await this.setLoggedIn()
    if (this.loggedin){
    return true;
    }
    else{
      alert("Rossz jelszo")
      this.router.navigate(['/login']);
      return false;
    }
    }

    async setLoggedIn():Promise<void>{ 
      this.loggedin = await (await this.sendingService.loggedin()).toPromise()
    }
}
