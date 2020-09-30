import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    selector:'nav-section',
    template:`
    <div class="main">
        <div class="container">
            <div>
                <h1><a href ="http://localhost:4200/" style="color:white;">Acordes FM</a></h1>
            </div>

            <button mat-flat-button *ngIf="!auth.isAuthenticated" color="primary" routerLink="/login">Iniciar Sesión/Registrar</button>

            <button mat-flat-button  *ngIf="auth.isAuthenticated" color="primary"  (click) = "auth.logout()" >Cerrar Sesión</button>
            
            <button mat-flat-button *ngIf="!auth.isAuthenticated" color="primary" routerLink="/cart">Carrito</button>
        </div>
    </div>
    `,
    styleUrls:['./nav.section.component.css']
})

export  class NavSectionComponent{
    constructor(private auth:AuthService){}
}