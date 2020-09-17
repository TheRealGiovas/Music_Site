import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
//Esto es necesario para decirle a angular que esto es un 'Injectable' osea un tipo de servicio
@Injectable()
export class WebService{
  

    //está inyectando una instancia de el objeto Http
    constructor(private http:Http){

    }

    BASE_URL ='http://localhost:63145/api';

    async getMessage(){
        //accedemos al objeto http que le pasamos arriba
       var response = await this.http.get(this.BASE_URL+"/message").toPromise();
       return response.json();
    }
    async  postMessage(Message){
        //accedemos al objeto http que le pasamos arriba
        var response = await  this.http.post(this.BASE_URL+"/message", Message).toPromise();
        return response.json();
    }

}