import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: '',
  template: ''
})
export abstract class BaseChipControllerComponent implements OnInit {

  @Input('numberOfChips') set numberOfChipsSetter(value: number) {
    this.numberOfChipsList = [];
    for(let i = 0; i < value; i++) this.numberOfChipsList.push(i);
  }
  protected numberOfChipsList: number[] = [];

  @Input() chip = 0;
  @Output() chipChange = new EventEmitter<number>();

  @Input() chipTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    if (!this.chipTemplate) throw new Error('chip template is required');
  }

  protected setChip(chip: number) {
    this.chip = chip;
    this.chipChange.emit(chip);
  }

}
