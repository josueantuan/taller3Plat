import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

//Importar componentes
import { MapaMComponent } from "./components/mapa-m/mapa-m.component";
import { MapaDComponent } from "./components/mapa-d/mapa-d.component";
import { MapaSComponent } from "./components/mapa-s/mapa-s.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./menu/menu.component";

const appRoutes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'marca', component: MapaMComponent},
    {path:'sitio', component: MapaSComponent},
    {path: 'direccion', component: MapaDComponent},
    {path: 'login', component: LoginComponent},
    {path: 'menu', component: MenuComponent},
    {path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
 
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);