import { Routes } from '@angular/router';
 
import { Home6703Component} from './home6703/home6703.component'
import { Contact6703Component} from './contact6703/contact6703.component'
import { Product6703Component} from './product6703/product6703.component'
import { Error6703Component} from './error6703/error6703.component'

import { AuthenGuardService } from './authen/authen-guard.service';
import { LoginComponent } from './login/login.component';
 
export const appRoutes: Routes = [
  { path: 'home', component: Home6703Component },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: Contact6703Component },
  
  //{ path: 'product', component: Product6703Component },
  { path: 'product', component: Product6703Component, canActivate : [AuthenGuardService] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error6703Component }
];   