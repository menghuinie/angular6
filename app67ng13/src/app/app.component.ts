import { Component } from '@angular/core';

import { AuthenService } from './authen/authen.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app67ng13';
 
  constructor (private authenService:AuthenService, 
               private router:Router) {
  }
 
  logout() {
    this.authenService.logoutUser();
    this.router.navigate(['home']);
  }
  
}
