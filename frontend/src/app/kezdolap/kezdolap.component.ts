import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Answer } from '../classes/answer';
import { Question } from '../classes/question';
import { SendingService } from '../services/sending.service';
import { Questionnaire } from '../classes/questionnaire';
import { User } from '../classes/user';



@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrls: ['./kezdolap.component.css']
})
export class KezdolapComponent implements OnInit {

  public questions: Question[] = [];
  public newQuestion:Question = new Question("",false)
  id: number=0;
  selectedquestionnaire:Questionnaire = new Questionnaire('',false,[],0)
  questionnaires:Questionnaire[] =[];
  newQuestionaire = new Questionnaire('', false, [],0)
  questionaire:any
  newUser = new User('')

  constructor(private _sendingService: SendingService, private router: Router) { }

  ngOnInit(): void {
    this.onLoad()
  }

  onSubmit(): void {
      this.creatUser()
  }

  creatUser(): void {
    this._sendingService.createUser(this.newUser)
    .subscribe(
      data => console.log("Siker ", data),
      error => console.error(error),
    )
  }

  onLoad(): void {
    this.id=0;
    this._sendingService.getQuestionnaires()
      .subscribe(data =>{ this.questionnaires = data;
      if(this.selectedquestionnaire.id == 0) {
        this.selectedquestionnaire = this.questionnaires[0]
        this.questionaire = this.selectedquestionnaire
      };
      console.log('Default ', this.selectedquestionnaire.id);
      this._sendingService.getQuestionnairesId(this.selectedquestionnaire.id)
  })}

  onQuestionnaireSelected(val:any){
    this._sendingService.getQuestionnairesId(val)
      .subscribe(data =>{this.selectedquestionnaire = data;
                          console.log("Lekeres eredmenye", data)
                          this.onLoad()
                        })

  }

 goToAdminPage(){
  this.router.navigate(['/login'])
 }

 goToQuestionaire() {
   this.router.navigate(['/questionaire'])
 }

}
