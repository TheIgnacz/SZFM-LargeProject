import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SendingService } from '../services/sending.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputpassword:String='';
  error:String="";
  
  constructor(private titleService: Title, private router:Router, private route:ActivatedRoute, private sendinService:SendingService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Bejelentkezés");
  }

  login():void {
     this.sendinService.setpassword(this.inputpassword).subscribe(data =>{this.router.navigate(['/admin'])},
                                                                      error=>console.log(error)
        )}

  backToHome(){
    this.router.navigate(['/kezdolap'])
  }
}
