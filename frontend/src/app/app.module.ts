import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages.component';
import {WebService} from './Web.service/web.service';
import {HttpModule} from '@angular/http';
import {NewMessagesComponent} from './new-Message.component';
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


import {LandingPage} from './Pages/landing.component';

import {LoginPage} from './Pages/loginPage.component';

import {RegisterPage} from './Pages/registerPage.component';

var routes =[
  {
  path:'',
  component:LandingPage
  },
  {
    path:'register',
    component:RegisterPage
  },
  {
    path:'login',
    component:LoginComponent
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

      LoginPage,
      LandingPage,
      RegisterPage
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

      RouterModule.forRoot(routes)
      ],
  providers: [WebService, AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
