import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class SendingService {

  _url ='http://localhost:3000/questions'
  constructor(private _http: HttpClient) { }

  send(question:Question) {
    return this._http.post<any>(this._url, question)
  }
  

}
