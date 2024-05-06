import { Component } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.css'
})
export class ChiSiamoComponent {

  listaPersone: Persona[] = [
    new Persona('Best', 'Mak'),
    new Persona('Dario', 'Mennillo')

  ]
}
