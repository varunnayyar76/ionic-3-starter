import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { ProductsProvider } from '../providers/products/products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    HomePage,
    ListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
