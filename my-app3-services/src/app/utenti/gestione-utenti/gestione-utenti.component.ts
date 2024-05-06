import { Component } from '@angular/core';
import { Utente } from '../../models/utente.models';
import { UtentiService } from '../../utenti.service';

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrl: './gestione-utenti.component.css'
})
export class GestioneUtentiComponent {

utente: Utente = {
  id: 4,
  nome: 'Best',
  cognome: 'mak',
  corso: 'React',

};

constructor(private utentiServ: UtentiService){}

addUtente(){
  this.utentiServ.addUtente(this.utente);
}
}
