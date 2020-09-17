import { Component, Output, EventEmitter } from '@angular/core'
import {WebService} from './Web.service/web.service';
import {MatInputModule} from '@angular/material/input';

//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    selector: 'new-message',
    template: `
    <form class="example-form">
        <mat-form-field class="example-full-width">
            <mat-label>Favorite food</mat-label>
            <input matInput placeholder="Ex. Pizza" value="Sushi">
        </mat-form-field>
    
        <mat-form-field class="example-full-width">
            <mat-label>Leave a comment</mat-label>
            <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
        </mat-form-field>
    </form>
    `
})
export class NewMessagesComponent {
    @Output() onPosted = new EventEmitter();
    
    //aqui le inyectamos el webservice a nuestro componente para que agarre info de ahí
    constructor(private WebService: WebService){}
    message={
        owner:"t",
        text:""

    }
    post(){
        this.WebService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }

}