import { Component, Input } from '@angular/core';
import { Pizza } from '../../pizzaModel';

@Component({
  selector: 'app-pizza-gusti',
  templateUrl: './pizza-gusti.component.html',
  styleUrl: './pizza-gusti.component.css'
})
export class PizzaGustiComponent {
 
    //con questo decorator
    @Input() pizzaSingola: Pizza

    assegnaColore(pizza: Pizza){
      
        return "bg-warning";
     
    }
    
}
