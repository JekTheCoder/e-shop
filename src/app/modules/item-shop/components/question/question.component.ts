import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@common/services/fake-store.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question!: Question;

  protected votes = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
