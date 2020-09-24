import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'products-page',
  templateUrl: "./products.page.component.html",
  styleUrls: ['./products-page.component.css']
})
 
export class productsPage {
  
 //imagenUrl: string = "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg";
 products: json[]

 DOMAIN = "http://localhost:63145/product/all";

 /* = [
     new json() ,
     new json() ,
     new json({name:"electric", ImageUrl:this.imagenUrl, url:"", price: 10 }) ,
     new json({name:"bateria", ImageUrl:this.imagenUrl, url:"" , price: 10}) ]
*/
    constructor(private http:Http){
        
    }

    ngOnInit(){
      let resp = this.http.get(this.DOMAIN);
      resp.subscribe((data)=>{
         this.products = data.json().array;
    });
    }

}


class json  {
  name: string;
  ImageUrl: string;
  price: string
  productUrl:string

  
  constructor(obj){
    this.name = obj.name;
    this.ImageUrl =obj.ImageUrl;
    this.price = obj.price;
    this.productUrl = obj.productUrl;
  }
  
}