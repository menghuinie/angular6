import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp6203expenseComponent } from './cmp6203expense/cmp6203expense.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Cmp6203expenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      //FormModule do the necessary setup to enable two-way data binding.
    AppRoutingModule,
    HttpClientModule   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }