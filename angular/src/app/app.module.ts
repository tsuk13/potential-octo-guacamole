import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EntryComponent } from'./entry.component';

import { AdminHomeComponent } from './admin/admin-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'admin',
        component: AdminHomeComponent
      },
      {
        path:'**',
        redirectTo: ''
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
