import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitcountPipe } from './digitcount.pipe';
import { Template1formsComponent } from './template1forms/template1forms.component';
import { Cmp6502reactiveFormComponent } from './cmp6502reactive-form/cmp6502reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Cmp6503reactiveFormValidationComponent } from './cmp6503reactive-form-validation/cmp6503reactive-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitcountPipe,
    Template1formsComponent,
    Cmp6502reactiveFormComponent,
    Cmp6503reactiveFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,        //FormModule do the necessary setup to enable two-way data binding.
    ReactiveFormsModule,   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }