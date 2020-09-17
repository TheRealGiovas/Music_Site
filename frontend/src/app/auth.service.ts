import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
//
//Web service que se conecta con el servidor
//
//



@Injectable()
export class AuthService{
    BASE_URL = 'http://localhost:63145/auth';

    //Le agregamos estas constantes para que sea más facil de leer (NO SON LAS LLAVES DE VERDAD)
    
    NAME_KEY = 'name'
    TOKEN_KEY = 'token'

    constructor(private http:Http, private router: Router){}

    //
    //isAuthenticated: Verifica sí existe un valor del TOKEN guardado en localStorage, sí es el caso entonces sí se autentificó
    //
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }



    //
    //register: Recibe de parametro la información del usuario para registrarlo
    //
    register(user){
        //
        //Borra el password repetido del objeto que se le pasa
        //

        delete user.confirmPassword;
        
        //
        //Almacena el token del usuario y su nombre dentro del navegador usando su localstorage
        //
        this.http.post(this.BASE_URL + "/register", user).subscribe((res)=>{
          
            //
            //Sí la respuesta del servidor no devolvió un token entonces nos invalida el registro
            //a

            if(!res.json().token){
                return;
            }



            localStorage.setItem(this.TOKEN_KEY, res.json().token);
            localStorage.setItem(this.NAME_KEY, res.json().user);
            this.router.navigate(['/']);
        });

      
    }

    login(user){

        
        //
        //Almacena el token del usuario y su nombre dentro del navegador usando su localstorage
        //
        this.http.post(this.BASE_URL + "/login", user).subscribe((res)=>{
          
            //
            //Sí la respuesta del servidor no devolvió un token entonces nos invalida el registro
            //a

            if(!res.json().token){
                return;
            }



            localStorage.setItem(this.TOKEN_KEY, res.json().token);
            localStorage.setItem(this.NAME_KEY, res.json().user);
            this.router.navigate(['/']);
        });

      
    }







    //
    //Saca al usuario de la sesión removiendo su certificado
    //
    logout(){
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);       
        this.router.navigate(['/']);
    }

}