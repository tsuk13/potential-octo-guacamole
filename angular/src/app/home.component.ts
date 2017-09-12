import { Component } from '@angular/core';

import { Entry } from './entry';
import { ENTRIES } from './entries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'app';
  entries: Entry[] = ENTRIES;
}
