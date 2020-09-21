import { Component } from '@angular/core';

@Component({
  selector: 'product-detail-page',
  templateUrl: "./product-detail.page.component.html",
  styleUrls: ['./product-detail.page.component.css']
})
 
export class productDetailPage{
 
  product;

  DOMAIN = "http://localhost:4200/";

    constructor(){
        
        this.product={
          name:"Guitarra",
          image:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
          description:"Con la nueva guitarra chingona acá perrona yu know beibi",
          caracteristics:["Es roja","Es chingona","Suena perrón"],
          price:"$1500"
        }
    }

    
    async getProduct(){
      //accedemos al objeto http que le pasamos arriba
     return response.json();
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