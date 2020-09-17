import { Component } from '@angular/core'

//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    selector: 'search-bar',
    template: `
        <div class="banner"></div>
    `,
    styles: ['.banner {  width:300px; height: 50px; background-color:black }']    
})
export class SearchBarComponent {
    constructor(){}
}