import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
  ];   
