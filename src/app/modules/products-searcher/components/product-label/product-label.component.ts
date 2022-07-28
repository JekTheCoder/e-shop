import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@common/services/fake-store.service';

@Component({
  selector: 'app-product-label',
  templateUrl: './product-label.component.html',
  styleUrls: ['./product-label.component.scss']
})
export class ProductLabelComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
    if (!this.product) throw new Error('product input is required')
  }

}
