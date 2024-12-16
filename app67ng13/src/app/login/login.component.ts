import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenService } from '../authen/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit { 
  invalidCredentialMsg: string ="";
  username:string="";
  password:string="";
  retUrl:any="home";

  constructor(private authenService: AuthenService, 
              private router: Router, 
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
      this.activatedRoute.queryParamMap
              .subscribe(params => {
          this.retUrl = params.get('retUrl'); 
          console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
      });
  }

  onFormSubmit(loginForm: any ) {
     this.authenService.login(loginForm.value.username, loginForm.value.password).subscribe( (data:any) => {
         console.log( 'return to '+ this.retUrl);
         if (this.retUrl!=null) {
              this.router.navigate( [this.retUrl]);
         } else {
              this.router.navigate( ['home']);
         }
     });
  }

}
