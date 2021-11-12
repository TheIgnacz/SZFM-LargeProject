import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { SendingService } from './sending.service';

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
      .subscribe(data =>  this.questions = data);
  }

}
