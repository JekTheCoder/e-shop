import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '@common/services/fake-store.service';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss']
})
export class ItemShopComponent implements OnInit {



  constructor(protected fs: FakeStoreService) { }

  ngOnInit(): void {}

}
