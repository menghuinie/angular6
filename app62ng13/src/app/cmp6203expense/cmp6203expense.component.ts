import { Component, OnInit} from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cmp6203expense',
  templateUrl: './cmp6203expense.component.html',
  //templateUrl: '<h1>{{ title }}</h1>',      //this not work;
  styleUrl: './cmp6203expense.component.css'
  //styles: ['h1 { color: '#ff0000' }']      //got syntax error;
})

export class Cmp6203expenseComponent implements OnInit {
  title3 = '';
   //timeChange = new Observable(); 

  constructor() { } 

  ngOnInit() {     // this is must, otherwise got error;
     this.title3 = "expense 115";    
  }   

/*
  constructor(private debugService : DebugService) {}   //not work: from where to import DebugService;
  
  ngOnInit() { 
    this.debugService.info("Angular Application starts"); 
  } 
*/

showData($event: any){ 
    console.log("button 343 clicked!"); if($event) { 
    console.log($event.target); 
    console.log($event.target.value); 
  } 
} 

userNameC:string = "TinaC"; 

userName:string = "TinaF"; 

myCSSClass = "Magenta"; 
//myCSSClass = "Orange"; 
applyCSSClass = false; 
//applyCSSClass = true; 

//myColor = 'DarkOrchid'; 
myColor = 'Orange'; 

//isLogIn : boolean = true;
//isLogOut : boolean = false; 

isLogIn : boolean = false;
isLogOut : boolean = true; 

fruits = ["Apple","Orange","Mango","Kiwi"]; 

list = [1,2,3,4,5];

logInName = 'admin'; 

presentDate = new Date();

timeChange = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new 
  Date().toString()), 1000); 
});

}