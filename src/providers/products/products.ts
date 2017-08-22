import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { DmoConstants } from '../../utils/DMOConstants';

@Injectable()
export class ProductsProvider {
	constructor(public http: Http) {
		console.log('Hello ProductsProvider Provider');
	}

	getProducts(data) {
		return new Promise((resolve, reject )=> {
			let headers = new Headers();
			headers.append('Content-type', 'application/json');
			this.http.post(DmoConstants.BASE_URL + 'search', { data: data }, { headers: headers })
				.map(res => res.json())
				.subscribe(
					data => {resolve(data);},
					error => { reject(error);}
				);
		});
	}

	getProductDetails(id: number) {
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Content-type', 'application/json');
			this.http.get(DmoConstants.BASE_URL + 'productDetails/' + id, { headers: headers })
				.map(res => res.json())
				.subscribe(
					data => {resolve(data);},
					error => { reject(error);}
				);
		});
	}
}
