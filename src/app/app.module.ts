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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaMComponent,
    MapaSComponent,
    MapaDComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    }),
    AgmDirectionModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
