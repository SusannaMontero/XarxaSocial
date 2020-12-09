import { Component, OnInit } from '@angular/core';
import { Usuari } from '../Usuari.llista';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarioArray: Usuari[] = []; //array donde guarda la informacion de los perfiles
  usuarioSelected: Usuari = null; //guarda el usuario seleccionado.


  ngOnInit(): void {  //perfiles de los usuarios con objetos
    this.usuarioArray.push(new Usuari('Josep', 'Rodríguez','99','assets/IMG.jpg','El millor01', 'josep@gmail.com','*****','*****'))
    this.usuarioArray.push(new Usuari('Cristian', 'Tortosa','99','assets/Cristian.jpg','El millor02', 'cristian@gmail.com','****','****'))
    this.usuarioArray.push(new Usuari('Ronnie', 'Coleman','99','assets/ronnie.jpg','El millor05', 'king@gmail.com','**','**'))
    this.usuarioArray.push(new Usuari('Aida', 'Jesus','99','assets/harry_potter.jpg','La millor01', 'aida@gmail.com','*****','*****'))
    this.usuarioArray.push(new Usuari('Marc', 'Valdivia','99','assets/Marc.jpg','El millor03', 'marc@gmail.com','****','****'))
    this.usuarioArray.push(new Usuari('Jordi', 'Obis','99','assets/AntonioOrozco.jpg','El millor04', 'Jordi@gmail.com','**','**'))
  }

   // Función que se ejecuta al hacer click en un usuario de la lista
   selectUsuario(usuario: Usuari): void {

    // Guardamos en una variable de la clase del usuario seleccionado
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
