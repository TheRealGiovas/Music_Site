//VA A IMPORTAR COMPONENT PARA PODER CREAR UN COMPONENTE
import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-message.component';
import {NavComponent} from './Nav/nav.component';

@Component({
  //SELECTOR es el nombre de mi componente
  selector: 'app-root',
  //TEMPLATE es el HTML del componente, se puede
  // escribir como un 'template:' y escribir el estilo inline o bien
  // escribir 'templateURLs:' y redireccionar a una .html

  //{{PROPIEDAD}} permite hacer un display de la propiedad que va adentro de los {{}}

  template: `  
  <nav></nav>  <router-outlet></router-outlet>`
  //<h1>Hello {{name}}</h1> <new-message></new-message><messages></messages>`,

  //ES LA HOJA DE ESTILOS DEL COMPONENTE, se puede
  // escribir como un 'style:' y escribir el estilo inline o bien
  // escribir 'styleURLs:' y redireccionar a una hoja

  //   styleUrls: ['./app.component.css']



})
export class AppComponent  {
  //title es la propiedad del componente que está siendo exportado
  name = 'World';
}
