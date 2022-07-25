import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '@common/services/fake-store.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  protected readonly MAX_LENGTH = 200;

  @Input() answer?: Answer

  protected collapsed!: boolean;
  protected length: number = this.MAX_LENGTH;
  protected overflowed!: boolean;

  ngOnInit() {
    this.collapsed =
    this.overflowed = this.MAX_LENGTH < (this.answer?.content.length || 0);
  }

  collapseToggle() {
    this.collapsed = !this.collapsed;
    this.length = this.collapsed ? this.MAX_LENGTH : this.answer!.content.length;
  }
}
