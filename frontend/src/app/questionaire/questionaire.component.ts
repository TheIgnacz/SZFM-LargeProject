import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../classes/answer';
import { Question } from '../classes/question';
import { IQuestion } from '../classes/questioni';
import { SendingService } from '../services/sending.service';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {

  questions:any
  id:any

  constructor(private _sendingService: SendingService, private titleService: Title, private router: Router, private route:ActivatedRoute) {}
  
  filterQuestion(questions: IQuestion) {
    return questions.id != this.id;
  }

  ngOnInit(): void {
    this.titleService.setTitle("Kezdőlap")
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    })
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
