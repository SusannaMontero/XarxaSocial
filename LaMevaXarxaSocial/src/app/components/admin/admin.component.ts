import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Usuari } from '../Usuari.llista';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() usuario: Usuari;
  deleteEvent: EventEmitter<Usuari> = new EventEmitter<Usuari>();
  users: Usuari[]=[];
  userSeleccionat: Usuari = null;

  constructor() { }

  ngOnInit(): void {
    this.users.push(new Usuari('Josep', 'Rodríguez','99','assets/fotoMozart.jpg','El millor01', 'josep@gmail.com','*****','*****'))
    this.users.push(new Usuari('Cristian', 'Tortosa','99','assets/manuelCarrasco.jpg','El millor02', 'cristian@gmail.com','****','****'))
    this.users.push(new Usuari('Ronnie', 'Coleman','99','assets/manuelCarrasco.jpg','El millor05', 'king@gmail.com','**','**'))
    this.users.push(new Usuari('Aida', 'Jesus','99','assets/fotoMozart.jpg','La millor01', 'aida@gmail.com','*****','*****'))
    this.users.push(new Usuari('Marc', 'Valdivia','99','assets/manuelCarrasco.jpg','El millor03', 'marc@gmail.com','****','****'))
    this.users.push(new Usuari('Jordi', 'Obis','99','assets/AntonioOrozco.jpg','El millor04', 'Jordi@gmail.com','**','**'))
  }

  seleccionarUser(users:Usuari):void{
    this.userSeleccionat = users;
  }

  deleteUsuario(): void {
    this.deleteEvent.emit(this.usuario);
  }
}
