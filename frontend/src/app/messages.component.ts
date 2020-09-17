import { Component } from '@angular/core'
import {WebService} from './Web.service/web.service';

//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of WebService.message">
        <mat-card style="margin:8px">
            <mat-card-title>{{message.owner}}</mat-card-title>
            <mat-card-content>
                {{message.text}}
            </mat-card-content>
        </mat-card>
        </div>
    `
    
    // {{messages[0].text}}'//{{messages.length}}'
})
export class MessagesComponent {



    //aqui le inyectamos el webservice a nuestro componente para que agarre info de ahí
    constructor(private WebService: WebService){}
    //esto se llama al inicializar el componente

}