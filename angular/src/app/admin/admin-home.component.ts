import { Component } from '@angular/core';

import { Entry } from '../entry';
import { ENTRIES } from '../entries';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html'
})
export class AdminHomeComponent {
	curEntry = new Entry();
	filterText: string;
	entries: Entry[] = ENTRIES;

	onEdited(newEntry: Entry){
		this.curEntry = newEntry;
	}
}
