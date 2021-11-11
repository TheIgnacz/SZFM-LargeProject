import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Question } from './question';
import { IQuestion } from './questioni';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendingService {

  _url ='http://localhost:3000/questions'
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

}
