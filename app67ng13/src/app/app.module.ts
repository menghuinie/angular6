import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Home6703Component } from './home6703/home6703.component';
import { Contact6703Component } from './contact6703/contact6703.component';
import { Product6703Component } from './product6703/product6703.component';
import { Error6703Component } from './error6703/error6703.component';

import { Product6703Service } from './product6703/product6703.service'; 
import { appRoutes } from './app.routes';

import { LoginComponent } from './login/login.component';
import { AuthenGuardService } from './authen/authen-guard.service';
import { AuthenService } from './authen/authen.service';

@NgModule({
  declarations: [
    AppComponent,
    Home6703Component,
    Contact6703Component,
    Product6703Component,
    Error6703Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    RouterModule.forRoot(appRoutes)                           /*path location strategy */
    /*RouterModule.forRoot(appRoutes, { useHash: true }) */   /*Hashlocationstrategy */
    //AppRoutingModule
  ],
  providers: [
    Product6703Service,
    AuthenService,
    AuthenGuardService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
