import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cmp6502reactive-form',
  templateUrl: './cmp6502reactive-form.component.html',
  styleUrl: './cmp6502reactive-form.component.css'
})
export class Cmp6502reactiveFormComponent implements OnInit {
  userName : string =""; 
  formdata: any; 
 
  ngOnInit() { 
     this.formdata = new FormGroup({ 
        userName: new FormControl("type here")
     }); 
  } 

  onClickSubmit(data:any) {this.userName = data.userName;}

}
