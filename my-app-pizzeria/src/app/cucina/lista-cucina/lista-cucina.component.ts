import { Component, Input } from '@angular/core';
import { Cucina } from '../../cucinaModel';

@Component({
  selector: 'app-lista-cucina',
  templateUrl: './lista-cucina.component.html',
  styleUrl: './lista-cucina.component.css'
})
export class ListaCucinaComponent {

  @Input() cucinaSingola: Cucina

    assegnaColore(cucina: Cucina){
      
        return "bg-warning";
     
    }
}
