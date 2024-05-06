import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPizzaComponent } from './lista-pizza/lista-pizza.component';
import { PizzaGustiComponent } from './lista-pizza/pizza-gusti/pizza-gusti.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CucinaComponent } from './cucina/cucina.component';
import { ListaCucinaComponent } from './cucina/lista-cucina/lista-cucina.component';
import { MenuCucinaComponent } from './menu-cucina/menu-cucina.component';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPizzaComponent,
    PizzaGustiComponent,
    HomeComponent,
    MenuComponent,
    ContattiComponent,
    NavbarComponent,
    CucinaComponent,
    ListaCucinaComponent,
    MenuCucinaComponent,
    EditPizzaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
