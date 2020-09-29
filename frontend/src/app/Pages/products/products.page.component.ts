import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';


@Component({
  selector: 'products-page',
  templateUrl: "./products.page.component.html",
  styleUrls: ['./products-page.component.css']
})
 


export class productsPage {
  
  productsAll:json[]
 
 products: json[]
 
 term;
 
 DOMAIN:string;

 filterInformation:JSON = JSON.parse('{ "caracteristicas":[], "priceMin": 0, "priceMax":10000000}');
 

 constructor(private http:Http, private r:ActivatedRoute,){
  
 
 this.term = this.r.snapshot.paramMap.get('term');
 this.DOMAIN = "http://localhost:63145/products/"+ this.term;

}

//
//El metodo search redirecciona al usuario a esta misma pagina pero le dice al servidor que le pase los objetos que hagan
//match con lo que hay en la base de datos
//


    search(keyword){
      window.location.href = "http://localhost:4200/products/"+keyword;
    }


    filter(filtro){

      //
      //Verifica que la caracteristica no exista en el objeto filtro y sí no es el caso entonces lo inserta
      //
      if(filtro.caracteristica != null){

        if(this.filterInformation['caracteristicas'].includes(filtro.caracteristica)){
          
          this.filterInformation['caracteristicas'] =
          this.filterInformation['caracteristicas'].filter(word => word != filtro.caracteristica);


        }else{

          this.filterInformation['caracteristicas'].push(filtro.caracteristica);

        }
      }

      //
      //Verifica sí el objeto tiene precios y sí es así lo agrega al objeto
      //

      if(filtro.priceMin != null){

        this.filterInformation['priceMin'] = filtro.priceMin;
        
        this.filterInformation['priceMax'] = filtro.priceMax;

        
      }
      
      //
      //Basado en el objeto filter va a modificar el elemento all
      //

      var tmp = [];


      if(this.filterInformation['caracteristicas'].length ==0 ){

        for(var j =0;j < this.productsAll.length;j++){
        
          let element = this.productsAll[j];
  
  
            if(
             (element.price < this.filterInformation["priceMax"] && element.price >= this.filterInformation['priceMin'])){
              tmp.push(element);
            }
          
  
        }
        
  
      this.products = tmp;
        
      }else{

        for(var j =0;j < this.productsAll.length;j++){
        
          let element = this.productsAll[j];
  
          console.log(element);
  
          for(var i =0;i < this.filterInformation['caracteristicas'].length;i++){
  
            let e = this.filterInformation['caracteristicas'][i];
  
            if(element.caracteristicas.includes(e) &&
             (element.price < this.filterInformation["priceMax"] && element.price >= this.filterInformation['priceMin'])){
              tmp.push(element);
            }
          }
  
        }
        
  
      this.products = tmp;


      }



      



    }

    ngOnInit(){
      if(this.term == null){
        let resp = this.http.get("http://localhost:63145/products/all");
        resp.subscribe((data)=>{
         this.products = data.json().array;
         this.productsAll = data.json().array;
        });
      }
      else{
        let resp = this.http.get(this.DOMAIN);
        resp.subscribe((data)=>{
         this.products = data.json().array;
         this.productsAll = data.json().array;
        });
      }
      
    
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