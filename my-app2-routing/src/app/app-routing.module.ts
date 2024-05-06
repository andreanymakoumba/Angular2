import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { StudenteComponent } from './studente/studente.component';
import { CorsiComponent } from './corsi/corsi.component';

//qui dentro definisco le rotte come oggetti JS
const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: 'chi-siamo', 
    component: ChiSiamoComponent,
    children: [
  {path: 'docenti', component: DocentiComponent},
  {path: 'studenti', component: StudenteComponent},
  {path: 'corsi', component: CorsiComponent}
    ]},
    
  {path: 'contatti', component: ContattiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
