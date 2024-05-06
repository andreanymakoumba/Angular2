import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { ConttattiComponent } from './conttatti/conttatti.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'noleggio', component: NoleggioComponent,
  children:[
    //il :id indica che quel frammento è dinamico
    {path: 'films', component:FilmsComponent}]
  },

  {path: 'contatti', component: ConttattiComponent}

];








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
