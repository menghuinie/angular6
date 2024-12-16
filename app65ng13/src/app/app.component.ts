import { Component, OnInit} from '@angular/core';
import { Observer } from 'rxjs';
import { Observable, of, range, from, fromEvent } from 'rxjs'; 
import { ajax } from 'rxjs/ajax'; 
import { filter, map, catchError } from 'rxjs/operators'; 
import { Debug2Service } from './debug2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title$ = '';
  price : number = 20000;
  decimalNum: number = 0.8178; 
  fruits$$ = ["Apple","Orange","Mango","Kiwi"]; 
  jsonData = { id: 'one', name: { username: 'user1' }}
  digits100 : number = 100; 
  numbers : number[] = []; 
  sum1 : number = 0; 
  filteredNumbers : number[] = []; 
  sum2 : number = 0; 
  processedNumbers : number[] = []; 
  sum3 : number = 0; 
  apiMessage : string =""; 
  apiMessage2 : string =""; 
  counter : number = 0; 

  //constructor() { } 
  constructor(private debug2Service: Debug2Service) { } 

  ngOnInit() {     // this is must, otherwise got error;
      this.title$ = "app65ng13";   

      this.debug2Service.info("app 46 component initialized"); 

      const numbers$ = from([1,2,3,4,5,6,7,8,9,10]);       // Observable stream of data Observable<number>
      // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
      // const numbers$ = range(1,10); 

      const observer = {          // observer 
         next: (num: number) => {this.numbers.push(num); 
                                 this.sum1 += num }, 
         error: (err: any) => console.log(err),         // arrow functions do not have to have a return value.
         complete: () => console.log("Observation completed") 
      }; 
      numbers$.subscribe(observer); 

      const filterFn = filter( (num : number) => num > 5 ); 
      const filteredNumbers = filterFn(numbers$); 
      filteredNumbers.subscribe( (num : number) => {this.filteredNumbers.push(num); 
                                                    this.sum2 += num } ); 
      const mapFn = map( (num : number) => num*4 ); 
      const processedNumbers$ = numbers$.pipe(filterFn, mapFn); 
      processedNumbers$.subscribe( (num : number) => {this.processedNumbers.push(num); 
                                                      this.sum3 += num } ); 
      // this RxJS ajax operator creates an Observable from an Ajax request with a request object or a URL string.
      const api$ = ajax({  
          url: 'https://httpbin.org/delay/1', 
          method: 'POST', 
          headers: {'Content-Type': 'application/text' }, 
          body: "Hello" 
      }); 
      // $ at the end of the variable is to identify that the variable is Observable.
      api$.subscribe(res => {this.apiMessage = JSON.stringify(res.response) }); 
      // api$.subscribe(res => this.apiMessage = res.response.data );     

      const requestObj = {
          url: "https://api.github.com/users?per_page=5",
          method: "GET"
      };        
      
      const githubUsers = `https://api.github.com/users?per_page=2`;
      //const users = ajax(requestObj);      
      const users = ajax(githubUsers);   
      const subscribe = users.subscribe(
          res => {console.log(res); this.apiMessage2 = JSON.stringify(res.response) },  // next
          err => console.error(err),                                                      // error
          () => console.log("Observation completed")                                      // complete
      );

      // const users9 = ajax.getJSON("https://api.github.com/users?per_page=2");   // interesting, but will try later when have time.

     
      // const clickEvent$ = fromEvent(document.getElementById('counter'), 'click'); 
      // clickEvent$.subscribe( () => this.counter++ );  
  } 


  timeChange = new Observable<string>
  (
    (observer: Observer<string>) => {
      setInterval(                      // setInterval(displayHello, 1000);   
                                        // every second call function displayHello().
        () => observer.next(
          new Date().toString()
        ), 
        1000
      ); 
    }
  );

  }