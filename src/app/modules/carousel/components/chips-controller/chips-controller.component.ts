import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { animations } from './chips-controller.component.animations';

@Component({
  selector: 'app-chips-controller',
  templateUrl: './chips-controller.component.html',
  styleUrls: ['./chips-controller.component.scss'],
  animations
})
export class ChipsControllerComponent implements OnInit {

  @Input('items') set itemsSetter(value: number) {
    this.items = [];
    for(let i = 0; i < value; i++)
      this.items.push(i)
  }
  @Input() chipRef!: TemplateRef<any>;
  @Input()
  chipSelected: number = 0; 

  @Output('chipClicked') chipClickedEmitter = new EventEmitter<number>();

  items: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  chipClicked(chip: number) {
    this.chipClickedEmitter.emit(chip);
    this.chipSelected = chip;
  }
}
