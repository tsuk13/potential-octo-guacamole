import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry';

@Component({
	selector: 'entry-component',
  	templateUrl: './entry.component.html',
  	styleUrls: ['./entry.component.css']
})
export class EntryComponent {
	@Input() entry: Entry;
	@Input() editable: boolean;
	@Output() onEdited = new EventEmitter<Entry>();

	onEditClick() {
		this.onEdited.emit(this.entry);
	};
}