import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ProductsProvider } from '../../providers/products/products';
import { HeaderPageModule } from '../../components/header.module';

@NgModule({
  declarations: [
    HomePage 
  ],
  imports: [
    HeaderPageModule,
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
