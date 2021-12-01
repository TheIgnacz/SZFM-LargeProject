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

  questions:Question[]
  id:number
  private sub:any;
  userId:number

  constructor(private _sendingService: SendingService, private titleService: Title, private router: Router, private route:ActivatedRoute) {
    this.questions = []
    this.id = 0
    this.userId = 0
  }
  
  
  filterQuestion() {
    return this.questions
  }

  ngOnInit(): void {
    this.titleService.setTitle("Kezdőlap")
    this.sub = this.route.paramMap.subscribe(paramMap => {
      this.id = Number(paramMap.get('id'));
      this.userId = Number(paramMap.get('user'))
    })
    //console.log("id " + this.id)
    this.onLoad()
  }

  onLoad(): void {
    this._sendingService.getQuestionnairesId(this.id)
      .subscribe(data => {
        this.questions = data.questions
        console.log(this.questions)
      })
  }

  onSubmit(): void{
    for (let i of this.filterQuestion())
      console.log(i.value),
      this._sendingService.sendAnswer(i.value, i.id!, this.userId)
      .subscribe(
        data => console.log("Siker ", data),
        error => console.error(error),
        () => this.ngOnInit(),
      )
      this.backToHome()
 }
 backToHome(){
  this.router.navigate(['/kezdolap'])
}
}
