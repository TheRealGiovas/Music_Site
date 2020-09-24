import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'product-detail-page',
  templateUrl: "./product-detail.page.component.html",
  styleUrls: ['./product-detail.page.component.css']
})
 
export class productDetailPage{
  
  id = this.r.snapshot.paramMap.get('id');

  product:json;

  DOMAIN = "http://localhost:63145/product";

    constructor(private r:ActivatedRoute, private http:Http){
        
       
        /*{
          name:"Guitarra",
          image:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
          description:"Con la nueva guitarra chingona acá perrona yu know beibi",
          caracteristics:["Es roja","Es chingona","Suena perrón"],
          price:"1500"
        }*/

    }

    //
    //Inicializa el la variable de manera sincrona con el servidor
    //

    ngOnInit(){
      let resp = this.http.get(this.DOMAIN+"/Id/"+this.id);
      resp.subscribe((data)=> this.product = data.json());
    }

    


}


class json  {
  name: string;
  url:string;
  ImageUrl: string;
  price: string
  constructor(obj){
    this.name = obj.name;
    this.url = obj.url;
    this.ImageUrl =obj.ImageUrl;
    this.url=obj.url;
    this.price = obj.price;
  }
  
}