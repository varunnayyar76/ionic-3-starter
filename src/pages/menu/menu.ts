import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App} from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {
	@ViewChild(Nav) nav: Nav;
	rootPage:any = 'HomePage';
	
	pages: Array<{title: string, component: any}>;
	public is_loggedin: boolean = false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		protected app: App
	) {
		this.pages = [
			{ title: 'Home', component: 'HomePage' },
			{ title: 'List', component: 'ListPage' },
			{ title: 'Logout', component: 'AuthPage'}
		];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Menu');
	}

	openPage(page) {
		console.log("Root Page: ", page);
		if(page.component == 'AuthPage') {
			this.app.getRootNav().setRoot('AuthPage');
		} else {
			this.rootPage = page.component;
		}
	}
}
