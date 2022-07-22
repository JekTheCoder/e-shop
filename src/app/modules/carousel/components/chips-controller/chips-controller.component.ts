import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BaseChipControllerComponent } from '../base-chip-controller/base-chip-controller.component';
import { animations } from './chips-controller.component.animations';

@Component({
  selector: 'app-chips-controller',
  templateUrl: './chips-controller.component.html',
  styleUrls: ['./chips-controller.component.scss'],
  animations
})
export class ChipsControllerComponent extends BaseChipControllerComponent {
}
