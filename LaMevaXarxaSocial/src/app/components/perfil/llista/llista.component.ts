
import { Component, Input, OnInit } from '@angular/core';
import { Usuari } from './Usuari.llista';


@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent implements OnInit {

  // Variables
  usuaris: Usuari[]=[];
  usuariSeleccionat: Usuari = null;
  categoria: string = null;

  //recollim la info del fill Registre
  @Input () acte: Usuari;

  constructor() { }

  // array que conte les dades de l'usuari
  ngOnInit(): void {
    this.usuaris.push(new Usuari('Wolkfans Amadeus', 'Mozzart','50','assets/fotoMozart.jpg','Aquest es el primer Usuari de la llista', 'WAMozzart@musica.com','*****','*****'))
    this.usuaris.push(new Usuari('Manuel', 'Carrasco','39','assets/manuelCarrasco.jpg','Aquest es el segon Usuari de la llista', 'Mcarrasco@musica.com','****','****'))
    this.usuaris.push(new Usuari('Antonio', 'Orozco','48','assets/AntonioOrozco.jpg','Aquest es el tercer Usuari de la llista', 'WAMozzart@mozart.com','**','**'))
  }

   //funcio per afegir una nova comanda a l'array
   addRegistre(newRegistre: Usuari): void {
    this.usuaris.push(newRegistre);
  }

  //funcio per quan click a registre ens faci el canvi al botó
  cambiarAccio(categoria: string):void {
    this.categoria = categoria;
  }


// la funcion que se ejecuta en el moemnto que se clica un usuario asignandole valor a ese usuario
  seleccionarUsuari(usuaris:Usuari):void{
    this.usuariSeleccionat = usuaris;
  }

}
