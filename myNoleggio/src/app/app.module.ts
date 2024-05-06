import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ConttattiComponent } from './conttatti/conttatti.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { FilmsComponent } from './films/films.component';
import { ListaFilmsComponent } from './Films/lista-films/lista-films.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConttattiComponent,
    NoleggioComponent,
    FilmsComponent,
    ListaFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
