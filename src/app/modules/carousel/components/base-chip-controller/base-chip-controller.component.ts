import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  template: ''
})
export abstract class BaseChipControllerComponent implements OnInit {

  @Input() chip = 0;
  @Output() chipChange = new EventEmitter<number>();

  @Input() chipTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    if (!this.chipTemplate) throw new Error('chip template is required');
  }

}
