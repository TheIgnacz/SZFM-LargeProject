import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Question } from '../classes/question';
import { IQuestion } from '../classes/questioni';
import { Observable } from 'rxjs';
import { Answer } from '../classes/answer';
import { IQuestionaire } from '../classes/questionnairei';
import { Questionnaire } from '../classes/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class SendingService {

  _url ='http://localhost:3000/questions'
  _answer_url = 'http://localhost:3000/answers'
  _questionnaire_url ='http://localhost:3000/questionnaire'
  constructor(private _http: HttpClient) { }

  send(question:Question) {
    return this._http.post<any>(this._url, question)
  }
  
  getQuestions(): Observable<IQuestion[]>{
    return this._http.get<IQuestion[]>(this._url)
  }

  delete(id: number) {
    return this._http.delete<any>(this._url+'/'+id)
  }

  sendAnswer(value:number, qid:number) {
    let answer = new Answer(1, qid, new Date(), value)
    console.log(answer)
    return this._http.post<any>(this._answer_url, answer)
  }

  getQuestionnaires(){
    return this._http.get<IQuestionaire[]>(this._questionnaire_url)
  }

  getQuestionnairesId(id: number){
    return this._http.get<IQuestionaire>(this._questionnaire_url+'/'+id)
  }

  createQuestionnaire(questionare:any){
    return this._http.post<any>(this._questionnaire_url, questionare)
  }

  updateQuestionaire(id:number, questionaire:Questionnaire){
    console.log(questionaire)
    return this._http.put<any>(this._questionnaire_url+'/'+id, questionaire)
  }

  deleteQuestionaire(id: number) {
    return this._http.delete<any>(this._questionnaire_url+'/'+id)
  }

}
