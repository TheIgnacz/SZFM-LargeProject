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
  questionaire:any
  
  constructor(private _sendingService: SendingService) { }


  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(): void {
    this.id = 0
    this._sendingService.getQuestionnaires()
      .subscribe(data =>{ this.questionnaires = data;
      if(this.selectedquestionnaire.id == 0) {
        this.selectedquestionnaire = this.questionnaires[0]
        this.questionaire = this.selectedquestionnaire
      };
      console.log('Default ', this.selectedquestionnaire.id);
      this._sendingService.getQuestionnairesId(this.selectedquestionnaire.id)
      .subscribe(data => this.questions = data.questions)

  })}

  onSubmit(): void{
     this._sendingService.send(this.newQuestion)
      .subscribe(
        data => {console.log("Siker ", data),
                  this.questions.push(data);
                  this.selectedquestionnaire.questions = this.questions;
                  console.log(this.selectedquestionnaire.name)
                  this._sendingService.updateQuestionaire(this.selectedquestionnaire.id, this.selectedquestionnaire).subscribe(data=>console.log(data),
                                                                                                                                error => console.error(error), )
                },
        error => console.error(error),
        () => this.onLoad()
      )
  }

  onDelete():void{
    this._sendingService.delete(this.id)
    .subscribe(
      data => console.log("Siker ", data),
        error => console.error(error),
        () => this.onLoad()
    )
  }
  

  onQuestionnaireSelected(val:any){
    this._sendingService.getQuestionnairesId(val)
      .subscribe(data =>{this.selectedquestionnaire = data;
                          this.onLoad()})

  }

  onCreateQuestionaire(): void{
    this._sendingService.createQuestionnaire(this.newQuestionaire)
     .subscribe(
       data => console.log("Siker ", data),
       error => console.error(error),
       () => this.ngOnInit()
     )
 }

  onDeleteQuestionaire(){
    this._sendingService.deleteQuestionaire(this.selectedquestionnaire.id).subscribe(
      data => {console.log("Siker ", data),
                this.selectedquestionnaire.id = 0},
      error => console.error(error),
      () => this.onLoad()
    )
 }

}
