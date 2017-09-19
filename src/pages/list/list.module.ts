import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { HeaderPageModule } from '../../components/header.module';

@NgModule({
  declarations: [
    ListPage  
  ],
  imports: [
    HeaderPageModule,
    IonicPageModule.forChild(ListPage)
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {}
