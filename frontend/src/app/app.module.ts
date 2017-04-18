import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { routing, appRouterProviders } from './app.routing';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./service/authentication.service";
import {UserService} from "./service/user.service";
import {EnrolComponent} from "./enrol/enrol.component";
import {DownloadComponent} from "./download/download.component";

@NgModule({
    declarations: [AppComponent,
                   LoginComponent,
                   EnrolComponent,
                    DownloadComponent
                   ],
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              HttpModule,
              AlertModule.forRoot(),
              DatepickerModule.forRoot(),
              routing],
    providers: [
        AuthenticationService,
        UserService,
        appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
