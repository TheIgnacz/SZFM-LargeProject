import { Component, OnInit } from '@angular/core';
import { Answer } from '../classes/answer';
import { Question } from '../classes/question';
import { SendingService } from '../services/sending.service';

@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrls: ['./kezdolap.component.css']
})
export class KezdolapComponent implements OnInit {

  questions:any

  constructor(private _sendingService: SendingService) { }

  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(): void {
    this._sendingService.getQuestions()
      .subscribe(data =>  this.questions = data,
                //() => console.log(this.questions) 
        );
      
  }

  onSubmit(): void{
    for (let i of this.questions)
      console.log(i.value),
      this._sendingService.sendAnswer(i.value, i.id)
      .subscribe(
        data => console.log("Siker ", data),
        error => console.error(error),
        () => this.ngOnInit()
      )
 }

}
