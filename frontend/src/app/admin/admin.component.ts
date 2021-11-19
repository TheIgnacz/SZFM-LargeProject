import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../classes/question';
import { Questionnaire } from '../classes/questionnaire';
import { SendingService } from '../services/sending.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions:any
  newQuestion = new Question('Kerdes', false)
  id:number = 0
  questionnaires:Questionnaire[] | any 
  questionnaire:any
  
  constructor(private _sendingService: SendingService) { }


  ngOnInit(): void {
    this.id = 0
    this.newQuestion = new Question('Kerdes', false)
    this.onLoad()
  }

  onLoad(): void {
    this._sendingService.getQuestionnaires()
      .subscribe(data => this.questionnaires = data);
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
  

  onQuestionnaireSelected(val:any){
    console.log(val)
    this._sendingService.getQuestionnairesId(val)
      .subscribe(data => this.questions = data.questions)

  }

}
