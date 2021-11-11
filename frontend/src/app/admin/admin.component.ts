import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from './question';
import { SendingService } from './sending.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions:any
  newQuestion = new Question('Kerdes', false)
  id:number = 0
  
  constructor(private _sendingService: SendingService) { }


  ngOnInit(): void {
    this.id = 0
    this.newQuestion = new Question('Kerdes', false)
    this.onLoad()
  }

  onLoad(): void {
    this._sendingService.getQuestions()
      .subscribe(data =>  this.questions = data);
  }

  onSubmit(): void{
     this._sendingService.send(this.newQuestion)
      .subscribe(
        data => console.log("Siker ", data),
        error => console.error(error),
        () => this.ngOnInit()
      )
  }

  onDelete():void{
    this._sendingService.delete(this.id)
    .subscribe(
      data => console.log("Siker ", data),
        error => console.error(error),
        () => this.ngOnInit()
    )
  }

}
