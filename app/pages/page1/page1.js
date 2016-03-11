import {Page} from 'ionic-angular';
import * as pouch from 'pouchdb';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

	constructor () {
		this.db = new pouch('mydb');
	}

}
