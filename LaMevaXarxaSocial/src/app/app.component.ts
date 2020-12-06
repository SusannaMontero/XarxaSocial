import { Component } from '@angular/core';
import { Usuari } from './components/Usuari.llista';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LaMevaXarxaSocial';

  usuarioArray: Usuari[] = [];
  usuarioSelected: Usuari = null;


  ngOnInit(): void {
    this.usuarioArray.push(new Usuari('Josep', 'Rodríguez','99','assets/fotoMozart.jpg','El millor01', 'josep@gmail.com','*****','*****'))
    this.usuarioArray.push(new Usuari('Cristian', 'Tortosa','99','assets/manuelCarrasco.jpg','El millor02', 'cristian@gmail.com','****','****'))
    this.usuarioArray.push(new Usuari('Ronnie', 'Coleman','99','assets/ronnie.jpg','El millor05', 'king@gmail.com','**','**'))
    this.usuarioArray.push(new Usuari('Aida', 'Jesus','99','assets/fotoMozart.jpg','La millor01', 'aida@gmail.com','*****','*****'))
    this.usuarioArray.push(new Usuari('Marc', 'Valdivia','99','assets/manuelCarrasco.jpg','El millor03', 'marc@gmail.com','****','****'))
    this.usuarioArray.push(new Usuari('Jordi', 'Obis','99','assets/AntonioOrozco.jpg','El millor04', 'Jordi@gmail.com','**','**'))
  }

   // Función que se ejecuta al hacer click en un personaje de la lista
   selectCharacter(usuario: Usuari): void {

    // Guardamos en una variable de la clase el personaje seleccionado
    this.usuarioSelected = usuario;
  }

   // Función para borrar un personaje
   deleteUsuario(usuario: Usuari) {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.usuarioSelected = null;

    // Filtramos el array de personajes
    this.usuarioArray = this.usuarioArray.filter(
      (char: Usuari, index: number, array: Usuari[]) => {

        // Si el nombre del personaje es diferente al que tenemos que borrar
        if (char.nom !== usuario.nom) {

          // Guardamos el personaje en el array filtrado
          return char;
        }
      });
  }

}
