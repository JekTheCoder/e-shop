import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() body: string = '';
  @Input() url: string = '';

  @Input() thumbnail: {
    alt: string,
    src: string
  } = {
    alt: '',
    src: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
