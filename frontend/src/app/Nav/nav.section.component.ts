import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector:'nav-section',
    template:`
    <div class="container">
        <div>
            <h1>Acordes FM</h1>
        </div>
        
        <search-bar></search-bar>


         <button mat-flat-button *ngIf="!auth.isAuthenticated" color="primary" routerLink="/login">Iniciar Sesión/Registrar</button>

         <button mat-flat-button  *ngIf="auth.isAuthenticated" color="primary"  (click) = "auth.logout()" >Cerrar Sesión</button>

    </div>
    `,
    styles:['.container {display: flex;  justify-content:space-around;}']
})

export  class NavSectionComponent{
    constructor(private auth:AuthService){}
}