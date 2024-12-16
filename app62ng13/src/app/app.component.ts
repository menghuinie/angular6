import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
 @Component is a decorator and it is used to convert a normal Typescript class to Angular Component.
*/

/*
 app-root is the selector name of the component and can be used by application root document: src/index.html
*/

export class Repos {
    id: string;
    name: string;
    html_url: string;
    description: string;

    constructor(id:string, name:string, html_url:string, description:string) { 
      this.id=id;
      this.name=name;
      this.html_url = html_url;
      this.description= description;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
      title = 'app62ng13';
      userName: string = "tektutorialshub"
      baseURL: string = "https://api.github.com/";
      repos: Repos[] = [];

      getURL: string = this.baseURL + 'users/' + this.userName + '/repos';

      constructor(private http: HttpClient) { }
    
      ngOnInit() {
        this.getRepos()
      } 

// HttpClient.get allows us to cast the returned response object to a type we require. 
// We supply the type for the returned value http.get<repos[]>
      public getRepos() { 
        return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
          .subscribe(
            (response) => {                           //Next callback
              console.log('response received')
              console.log(response);
              this.repos = response; 
            },
            (error2) => {                              //Error callback
              console.error('Request failed with error')
              alert(error2);
            },
            () => {                                   //Complete callback
              console.log('Request completed')
            })
      }
}