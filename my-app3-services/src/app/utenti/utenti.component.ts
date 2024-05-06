import { Component } from '@angular/core';
import { Pizza } from '../pizzeria/model/pizza.model';
import { PizzaService } from '../pizzeria/pizza.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})
export class UtentiComponent {

  listaPizze: Pizza[];

  constructor(private pizzaServ: PizzaService){
  }

  ngOnInit(): void {
    this.listaPizze = this.pizzaServ.listaPizze;
  }
}
