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

  public questions: Question[] = [];
  public newQuestion:Question = new Question("",false)
  id:number = 0
  selectedquestionnaire:Questionnaire = new Questionnaire('',false,[],0)
  questionnaires:Questionnaire[] =[];
  newQuestionaire = new Questionnaire('Kérdőív', false, [],0)
  
  constructor(private _sendingService: SendingService) { }


  ngOnInit(): void {
    this.id = 0
    this.onLoad()
  }

  onLoad(): void {
    this._sendingService.getQuestionnaires()
      .subscribe(data => this.questionnaires = data);
  }

  onSubmit(): void{
     this._sendingService.send(this.newQuestion)
      .subscribe(
        data => {console.log("Siker ", data),
                  this.questions.push(data);
                  this.selectedquestionnaire.questions = this.questions
                  this._sendingService.updateQuestionaire(this.selectedquestionnaire.id, this.selectedquestionnaire).subscribe(data=>console.log(data),
                                                                                                                                error => console.error(error), )
                },
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
    this._sendingService.getQuestionnairesId(val)
      .subscribe(data => {this.questions = data.questions,
                          this.selectedquestionnaire = data})

  }

  onCreateQuestionaire(): void{
    this._sendingService.createQuestionnaire(this.newQuestionaire)
     .subscribe(
       data => console.log("Siker ", data),
       error => console.error(error),
       () => this.ngOnInit()
     )
 }

}
