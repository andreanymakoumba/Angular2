import { Injectable } from '@angular/core';
import { Pizza } from './model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  listaPizze: Pizza[] = [

    new Pizza(
      1,
      "Margherita",
      10,
    'https://www.stefanofaita.com/wp-content/uploads/2022/04/pizzamargherita1.jpg'
    ),
  
    new Pizza(
      2,
      "Capriciosa",
      18,
      'https://www.pizzanapoletanadoc.it/wp-content/uploads/2019/04/capricciosa-pizza-napoletana-doc-600x330.jpg'),

    new Pizza(
      3,
      "Salsiccia e friarielli",
      22,
      'https://www.pizzanapoletanadoc.it/wp-content/uploads/2019/05/pizza-friarielli-broccoletti.jpg'
     
    ),

  ];

  constructor() { }

  getPizzaById(id: Number){
    let pizza = this.listaPizze.find((pizza) =>{
      return pizza.id == id;
    });
    return pizza;
  }
}
