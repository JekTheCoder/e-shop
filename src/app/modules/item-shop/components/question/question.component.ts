import { Component, Input, OnInit } from '@angular/core';

export interface Entry {
  user: string,
  date: Date,
  content: string
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question!: Entry;
  @Input() answers: Entry[] = [];
  @Input() id!: number;

  protected votes = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

}
