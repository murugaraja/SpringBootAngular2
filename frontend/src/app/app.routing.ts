import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DownloadComponent} from "./download/download.component";
import {EnrolComponent} from "./enrol/enrol.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'enrol/:id', component: EnrolComponent },
    { path: '', component: LoginComponent },
    { path: 'download/:token',component: DownloadComponent}
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
