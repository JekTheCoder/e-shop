import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: '',
  template: ''
})
export abstract class BaseChipControllerComponent {

  @Input('numberOfChips') set numberOfChipsSetter(value: number) {
    this.numberOfChipsList = [];
    for(let i = 0; i < value; i++) this.numberOfChipsList.push(i);
  }
  protected numberOfChipsList: number[] = [];

  @Input() chip = 0;
  @Output() chipChange = new EventEmitter<number>();

  @Input() chipTemplate!: TemplateRef<any>;

  constructor() { }

  protected setChip(chip: number) {
    this.chip = chip;
    this.chipChange.emit(chip);
  }

}
