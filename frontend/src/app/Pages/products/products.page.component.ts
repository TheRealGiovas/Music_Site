import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';
import {Http} from '@angular/http';


@Component({
  selector: 'products-page',
  templateUrl: "./products.page.component.html",
  styleUrls: ['./products-page.component.css']
})
 


export class productsPage {
  
 //imagenUrl: string = "https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg";
 productsAll:json[]
 
 products: json[]

 DOMAIN = "http://localhost:63145/product/all";

 filterInformation:JSON = JSON.parse('{ "caracteristica":[], "priceMin": 0, "priceMax":10000000}');
 

 constructor(private http:Http){


}

    search(keyword){
      window.location.href = "http://localhost:63145/product/"+keyword;
    }


    filter(filtro){

      //
      //Verifica que la caracteristica no exista en el objeto filtro y sí no es el caso entonces lo inserta
      //
      if(filtro.caracteristica != null){

        if(this.filterInformation['caracteristica'].includes(filtro.caracteristica)){
          
          this.filterInformation['caracteristica'] =
          this.filterInformation['caracteristica'].filter(word => word != filtro.caracteristica);


        }else{

          this.filterInformation['caracteristica'].push(filtro.caracteristica);

        }
      }

      //
      //Verifica sí el objeto tiene precios y sí es así lo agrega al objeto
      //

      if(filtro.priceMin != null){

        this.filterInformation['priceMin'] = filtro.priceMin;
        
        this.filterInformation['priceMax'] = filtro.priceMax;

        
      }
      
      
      alert(this.filterInformation['caracteristica'][0]);

      //
      //Basado en el objeto filter va a modificar el elemento all
      //

      var tmp = [];

      for(var j =0;j < this.productsAll.length;j++){
        
        let element = this.productsAll[j];

        console.log(element);

        for(var i =0;i < this.filterInformation['caracteristica'].length;i++){

          let e = this.filterInformation['caracteristica'][i];

          if(element.caracteristicas.includes(e) &&
           (element.price < this.filterInformation["priceMax"] && element.price >= this.filterInformation['priceMin'])){
            tmp.push(element);
          }
        }

      }
     // tmp.forEach(a=>alert(a.name));
      
      this.products = tmp;


    }

    ngOnInit(){
      let resp = this.http.get(this.DOMAIN);
      resp.subscribe((data)=>{
         this.products = data.json().array;
         this.productsAll = data.json().array;
    });
    
    }

}


class json  {
  name: string;
  ImageUrl: string;
  price: string;
  productUrl:string;
  caracteristicas:string[];
  
  constructor(obj){
    this.name = obj.name;
    this.ImageUrl =obj.ImageUrl;
    this.price = obj.price;
    this.productUrl = obj.productUrl;
    this.caracteristicas = obj.caracteristicas;
  }
  
}