import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../pizzaModel';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrl: './edit-pizza.component.css'
})
export class EditPizzaComponent {
  
  @Output() onPizza = new EventEmitter<Pizza>();


miaNuovaPizza: Pizza = new Pizza(
  "bdfdgd",
  ["best","dhdhdh", "ssfhfhfhfx"],
  'https://m.media-amazon.com/images/I/71POt33azmL._AC_UF1000,1000_QL80_.jpg',
  "14 EUR"
);

    nomePizza: string;
    ingredientiPizza: string[];
    locandinaPizza: string;


onCreaPizza() {
 
  this.onPizza.emit(this.miaNuovaPizza)
}
}
