import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template1forms',
  templateUrl: './template1forms.component.html',
  styleUrl: './template1forms.component.css'
})
export class Template1formsComponent implements OnInit {
  ngOnInit() {  }

  onClickSubmit(result:any) {
     console.log("You have entered : " + result.username); 
  }
}