import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertService, AuthenticationService, UserService } from './_services/index';
// import { HomeComponent } from './home/index';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/index';


@NgModule({
  declarations: [
    AppComponent

        AlertComponent,
        //HomeComponent,
        // LoginComponent,
        // RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
