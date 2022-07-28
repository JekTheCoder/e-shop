import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { buttonAnimation, inputAnimation } from './product-input.animations'

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  animations: [buttonAnimation, inputAnimation]
})
export class ProductInputComponent {

  @Input('value') set valueSetter(value: string) { this.input.setValue(value); }
  @Output() valueChange = new EventEmitter<string>();

  @Input()
  opened: boolean = false

  protected input: FormControl<string>;

  constructor(fb: FormBuilder) {
    this.input = fb.nonNullable.control('');

  }

  button() {
    if (!this.opened) { this.opened = true; return; }

    this.valueChange.emit(this.input.value);
  }

}
