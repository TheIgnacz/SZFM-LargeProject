import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from './question';
import { SendingService } from './sending.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _sendingService: SendingService) { }

  newQuestion = new Question('Kerdes', false)

  ngOnInit(): void {
  }

  onSubmit(): void{
    this._sendingService.send(this.newQuestion)
      .subscribe(
        data => console.log("Siker ", data),
        error => console.error(error)
      )
  }

}
