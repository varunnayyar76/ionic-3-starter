import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ProductsProvider } from '../../providers/products/products';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ],
  providers: [
    ProductsProvider
  ]
})
export class HomePageModule {}
