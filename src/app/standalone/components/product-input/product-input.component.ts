import { Component, Input, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { buttonAnimation, inputAnimation } from './product-input.animations'

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  animations: [buttonAnimation, inputAnimation]
})
export class ProductInputComponent implements OnInit {

  @Input()
  opened: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
