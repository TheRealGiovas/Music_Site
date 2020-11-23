import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages.component';
import {WebService} from './Web.service/web.service';
import {HttpModule} from '@angular/http';
import {NewMessagesComponent} from './new-message.component';
import {NavComponent} from './Nav/nav.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import {Register} from './Login/register.component';
import {LoginComponent} from './Login/login.component';
import {BannerComponent} from './Nav/banner.component';
import {NavSectionComponent} from './Nav/nav.section.component';
import {SearchBarComponent} from './Nav/search.bar.component';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap/';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {Ng2SearchPipeModule } from 'ng2-search-filter';

import {searchBox} from './Pages/products/Components/search-box.component';
import {MatGridListModule} from '@angular/material/grid-list';





import {productsPage} from './Pages/products/products.page.component';


import {productDetailPage} from './Pages/product-detail/product-detail.page.component';

import {LandingPage} from './Pages/landing.component';

import {LoginPage} from './Pages/loginPage.component';

import {RegisterPage} from './Pages/registerPage.component';

import {CartComponent} from './Pages/cart/cart.component';

import { ProductListComponent } from './Pages/product-detail/product-list.component';

var routes =[
  {
  path:'',
  component:LandingPage
  },
  
  {
    path:'product/:id',
    component:productDetailPage
  },
  {
    path:'products/:term',
    component:productsPage
  },

  {
    path:'register',
    component:RegisterPage
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];


@NgModule({
  //DECLARATIONS nos permite linkear los componentes entre si
  declarations: [
      AppComponent,
      MessagesComponent,
      NewMessagesComponent,
      NavComponent,
      Register,
      BannerComponent,
      NavSectionComponent,
      SearchBarComponent,
      LoginComponent,
      productsPage,


      NgbCarousel,
      searchBox,

      
      productDetailPage,
      LoginPage,
      LandingPage,
      RegisterPage,
      CartComponent,
      ProductListComponent, 
      CartComponent, 
      ],
      
  //AQUI VAN LOS COMPONENTS IMPORTADOS(librerias)
  imports:      [ 
      HttpModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatToolbarModule,
      FormsModule,
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      MatCheckboxModule,
      MatGridListModule,
      MatSelectModule,
      MatChipsModule,
      MatRadioModule,
      

      RouterModule.forRoot(routes)
      ],
  providers: [WebService, AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
