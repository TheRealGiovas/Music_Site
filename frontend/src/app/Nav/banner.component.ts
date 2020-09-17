import { Component } from '@angular/core'

//Esto le marca a angular que esto es un component y setea ciertas caracteristicas
@Component({
    selector: 'banner-component',
    template: `
        <div class="banner">
            <div class="links">
                <a href="url" style="color: white; ">Guitarras</a>
                <a href="url" style="color: white;">Accesorios</a>
                <a href="url" style="color: white;">Pianos</a>
            </div>
        </div>
    `,
    styles: ['.banner {  width:100%; height: 80px; background-color:black; display:flex;}',
    '.links{ width:100%; display: flex; justify-content:space-around;  align-self:flex-end; padding-bottom:20px; font-family:Roboto,"Helvetica Neue",sans-serif;}']    
})
export class BannerComponent {
    constructor(){}
}