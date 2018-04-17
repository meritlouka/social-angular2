import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { routing }        from './app.routing';

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { AppComponent } from './app.component';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { JwtInterceptor } from './_helpers/index';
import { fakeBackendProvider } from './_helpers/index';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
  ],
  providers: [   
       
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
