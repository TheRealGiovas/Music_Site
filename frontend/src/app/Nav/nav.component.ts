import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BannerComponent} from './banner.component';
@Component({
    selector:'nav',
    template:`
    <div>
    <mat-toolbar color="primary"> <nav-section style="width:100%"> </nav-section></mat-toolbar>
    <banner-component>a</banner-component>
    </div>
    `
})

export  class NavComponent{
    constructor(){}
}