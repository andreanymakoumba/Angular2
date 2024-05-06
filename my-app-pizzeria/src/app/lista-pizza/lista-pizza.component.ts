import { Component } from '@angular/core';
import { Pizza } from '../pizzaModel';

@Component({
  selector: 'app-lista-pizza',
  templateUrl: './lista-pizza.component.html',
  styleUrl: './lista-pizza.component.css'
})
export class ListaPizzaComponent {
  listaPizza: Pizza[] = [

    new Pizza(
      "Margherita",
    ["pomodoro", "mozzarella", "olio", "basilico"], 
    'https://www.stefanofaita.com/wp-content/uploads/2022/04/pizzamargherita1.jpg',
    "6 EUR"),
  
    new Pizza(
      "Capriciosa",
      ["prosciuto cotto", "mozzarella", "carciofi","olio", "basilico"],
      'https://www.pizzanapoletanadoc.it/wp-content/uploads/2019/04/capricciosa-pizza-napoletana-doc-600x330.jpg',
      "10 EUR"),

    new Pizza(
      "Salsiccia e friarielli",
      ["salsiccia", "mozzarella", "olio", "friarielli"],
      'https://www.pizzanapoletanadoc.it/wp-content/uploads/2019/05/pizza-friarielli-broccoletti.jpg',
     "12 EUR"
    ),

  ];
}
