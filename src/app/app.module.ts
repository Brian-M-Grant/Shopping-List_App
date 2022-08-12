import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import{HttpClientModule} from '@angular/common/http';
import { NewListComponent } from './views/new-list/new-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
