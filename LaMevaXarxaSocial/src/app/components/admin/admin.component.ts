import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuari } from '../Usuari.llista';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() usuario: Usuari;
  @Output() deleteEvent: EventEmitter<Usuari> = new EventEmitter<Usuari>();

  constructor() { }

  ngOnInit(): void {
  }


  deleteUsuario(): void {

    Swal.fire({
      title: 'Estas seguro/a?',
      text: "Usted no será capaz de revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.deleteEvent.emit(this.usuario);

        Swal.fire(
          'Borrado!',
          'Tu archivo ha sido eliminado.',
          'success'
        )
      }
    })

  }

}
