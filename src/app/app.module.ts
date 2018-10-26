import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapaMComponent } from './components/mapa-m/mapa-m.component';
import { MapaSComponent } from './components/mapa-s/mapa-s.component';
import { MapaDComponent } from './components/mapa-d/mapa-d.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
//-----------------------------Rutas----------------------------------
import { appRoutingProviders, routing } from "./app.routing";
import { LoginComponent } from './components/login/login.component';
import { LoginService } from "./services/login.service";
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {UrlPermission} from "./urlPermission/url.permission";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from "./menu/menu.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaMComponent,
    MapaSComponent,
    MapaDComponent,
    LoginComponent,
    MenuComponent
   
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    }),
    AgmDirectionModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    appRoutingProviders,
    LoginService,
    UrlPermission
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
