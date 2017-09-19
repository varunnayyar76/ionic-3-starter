import { Component, OnInit } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(
    public navCtrl: NavController,
    private productProvider: ProductsProvider
  ) {
  }

  getData() {
      this.productProvider.getProducts({}).then((resp: { type: String, data: any }) => {
          console.log(JSON.stringify(resp));            
      }).catch((error) => {
          alert(JSON.stringify(error));
      });
  }

  ngOnInit(): void {
    this.getData();
  }
}
