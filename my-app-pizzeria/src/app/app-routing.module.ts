import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ListaPizzaComponent } from './lista-pizza/lista-pizza.component';
import { CucinaComponent } from './cucina/cucina.component';
import { MenuCucinaComponent } from './menu-cucina/menu-cucina.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: "menu",component: MenuComponent,
children:[
{path: "cucina",component: CucinaComponent},
{path: "lista-pizza",component: ListaPizzaComponent}
]},

{path: "menu-cucina", component: MenuCucinaComponent},

  {path: "contatti", component: ContattiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
