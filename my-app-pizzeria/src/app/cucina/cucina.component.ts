import { Component } from '@angular/core';
import { Cucina } from '../cucinaModel';

@Component({
  selector: 'app-cucina',
  templateUrl: './cucina.component.html',
  styleUrl: './cucina.component.css'
})
export class CucinaComponent {
  listaCucina: Cucina[] = [

    new Cucina(
      "Rigatoni alla Carbonara",
    ["guanciale", "uovo", "olio", "pepe nero"], 
    'https://ristorantefuocolento.it/wp-content/uploads/2023/01/carbonara-1300x865.jpg',
    "9 EUR"),
  
    new Cucina(
      "Spaghetti al pomodoro",
      ["pomodoro", "olio", "sale","olio", "basilico"],
      'https://www.moltofood.it/wp-content/uploads/2024/01/Pasta-al-pomodoro-696x464.jpg',
      "10 EUR"),

    new Cucina(
      "Coda alla vacinara",
      ["code", "pomodoro", "olio", "cipolla", "sedano", "carote"],
      'https://www.nonsolopiccante.it/wp-content/uploads/2013/01/Coda-alla-vaccinara-5.jpg',
     "12 EUR"
    ),

  ];
}
