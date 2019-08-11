import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserDetailsGeneratorComponent } from './user-details-generator/user-details-generator.component'
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, UserDetailsGeneratorComponent ],
  providers:    [ HttpClientModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
