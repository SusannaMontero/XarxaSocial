import { Component, OnInit } from '@angular/core';
import { Usuari } from './Usuari.llista';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {

  usuaris: Usuari[]=[];
  usuariSeleccionat: Usuari = null;

  constructor() { }

  // array que conte les dades del usuari
  ngOnInit(): void {
    this.usuaris.push(new Usuari('Wolkfans Amadeus', 'Mozzart','50','assets/fotoMozart.jpg','Aquest es el primer Usuari de la llista', 'WAMozzart@musica.com','*****','*****'))
    this.usuaris.push(new Usuari('Manuel', 'Carrasco','39','assets/manuelCarrasco.jpg','Aquest es el segon Usuari de la llista', 'Mcarrasco@musica.com','****','****'))
    this.usuaris.push(new Usuari('Antonio', 'Orozco','48','assets/AntonioOrozco.jpg','Aquest es el tercer Usuari de la llista', 'WAMozzart@mozart.com','**','**'))
  }

// la funcion que se ejecuta en el moemnto que se clica un usuario asignandole valor a ese usuario
  seleccionarUsuari(usuaris:Usuari):void{
    this.usuariSeleccionat = usuaris;
  }


}
