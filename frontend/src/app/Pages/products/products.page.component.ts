import { Component } from '@angular/core';
 
@Component({
  selector: 'products-page',
  templateUrl: "./products.page.component.html",
  styleUrls: ['./products-page.component.css']
})
 
export class productsPage {
 imagenUrl: string = "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg";
 products: json[] = [
     new json({name:"piano", ImageUrl: this.imagenUrl, url:"", price: 10 }) ,
     new json({name:"guitarra", ImageUrl:this.imagenUrl, url:"", price: 10 }) ,
     new json({name:"electric", ImageUrl:this.imagenUrl, url:"", price: 10 }) ,
     new json({name:"bateria", ImageUrl:this.imagenUrl, url:"" , price: 10}) ]

    constructor(){
        
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