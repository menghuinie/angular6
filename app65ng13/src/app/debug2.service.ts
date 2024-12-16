import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Debug2Service {
  constructor() { }

  info(message : String) : void { 
    console.log(message); 
 }
}
