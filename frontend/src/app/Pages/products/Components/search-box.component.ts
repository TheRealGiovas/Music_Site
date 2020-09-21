import { Component } from '@angular/core';
 
@Component({
  selector: 'search-box',
  template: `
    <div class="search-box-container">
        <input type="text" [(ngModel)]="term">
        <div *ngFor = "let item of items |filter:term" >

          <div class="childs" *ngIf=" term != null && term.length >0">
            <a href={{item.url}}>
              {{item.name}}
            </a>
          </div>
        </div>
 
    </div>  
  `,
  styleUrls: ['./search-box.component.css']
  
})
 
export class searchBox {
  products:boolean;

  items: json[]= [new json({name:'jake',url:"https://www.gog.com/"}),new json({name:'jackie',url:"https://www.gog.com/"}), new json({name:'jojo',url:"https://www.gog.com/"})];

  condition:boolean
  constructor(){

  } 

}

class json  {
  name: string;
  url:string

  constructor(obj){
    this.name = obj.name;
    this.url = obj.url;
  }
  
}