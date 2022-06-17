import { Component, OnInit } from '@angular/core';
import { state, transition, animate, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('buttonAnim', [
      state('open', style({ transform: 'rotate(0deg)' }) ),
      state('closed', style({ transform: 'rotate(-360deg)' }) ),
      transition('* => *', animate('300ms') )
    ]),

    trigger('inputAnim', [
      state('opened', style({ width: '*' }) ),
      state('closed', style({ width: '0', padding: '0' }) ),
      transition('* => *', [
        animate('300ms')
      ] )
    ])
  ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened: boolean = false;

}
