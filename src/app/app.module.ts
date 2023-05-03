import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [AppComponent, SearchPipe, SortPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
  ReactiveFormsModule, NgxSelectModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
