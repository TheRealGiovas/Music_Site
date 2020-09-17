//VA A IMPORTAR COMPONENT PARA PODER CREAR UN COMPONENTE
import { Component } from '@angular/core';

@Component({
  //SELECTOR es el nombre de mi componente
  selector: 'register-page',
  //TEMPLATE es el HTML del componente, se puede
  // escribir como un 'template:' y escribir el estilo inline o bien
  // escribir 'templateURLs:' y redireccionar a una .html

  //{{PROPIEDAD}} permite hacer un display de la propiedad que va adentro de los {{}}

  template: ` <div style="text-align: center;"> <register-form> </register-form> </div>`

})
export class RegisterPage  {

}
