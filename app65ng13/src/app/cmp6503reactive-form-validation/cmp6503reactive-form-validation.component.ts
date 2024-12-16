import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp6503reactive-form-validation',
  templateUrl: './cmp6503reactive-form-validation.component.html',
  styleUrl: './cmp6503reactive-form-validation.component.css'
})
export class Cmp6503reactiveFormValidationComponent implements OnInit {
  ngOnInit() { }

  requiredForm: any;
  patternForm: any;
 
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     name: ['', Validators.required ]  
     });

     this.patternForm = this.fb.group({ 
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
     });

  }
}
