import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

//Importar componentes
import { MapaMComponent } from "./components/mapa-m/mapa-m.component";
import { MapaDComponent } from "./components/mapa-d/mapa-d.component";
import { MapaSComponent } from "./components/mapa-s/mapa-s.component";

const appRoutes: Routes = [
    {path: '',component: MapaMComponent},
    {path: 'marca', component: MapaMComponent},
    {path:'sitio', component: MapaSComponent},
    {path: 'direccion', component: MapaDComponent},
    {path: '**', component: MapaMComponent}
];

export const appRoutingProviders: any[] = [];
 
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);