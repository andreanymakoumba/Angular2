import { Injectable } from '@angular/core';
import { Utente } from './models/utente.models';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  listaUtenti: Utente[] = [
    new Utente(1, 'Laura', 'Verdi', 'Angular'),
    new Utente(2, 'Mario', 'Mar', 'Angular'),
    new Utente(3, 'Stronzo', 'Stro', 'Angular'),
  ]
  constructor() { }

  getAllUtenti(): Utente[]{
    return this.listaUtenti;
  }

  addUtente(utente: Utente){
    this.listaUtenti.push(utente);
  }

  removeUtenteById(id: number){

    this.listaUtenti = this.listaUtenti.filter((utente) =>
      utente.id !== id);
      console.log(this.listaUtenti);
      return this.listaUtenti;
     
  }
  
}
