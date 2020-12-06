import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuari } from '../../Usuari.llista';
import Swal from 'sweetalert2';   //importamos el sweetalert2 para poder usarlo.

@Component({
  selector: 'app-llista-us',
  templateUrl: './llista-us.component.html',
  styleUrls: ['./llista-us.component.css']
})
export class LlistaUsComponent implements OnInit {

  @Input() usuario: Usuari;   //guarda los datos de la classe Usuari en la variable usuario, input porque la classe Usuari esta fuera del admin.
  @Output() deleteEvent: EventEmitter<Usuari> = new EventEmitter<Usuari>();   //si no haces el output no puede enviarlo al padre (deleteEvent)="deleteUsuario($event)

  constructor() { }

  ngOnInit(): void {
  }


  deleteUsuario(): void {   //funcion que borra el usuario

    Swal.fire({   //el hace que salga un mensaje de si estas seguro de eliminar el codigo
      title: 'Estas seguro/a?',
      text: "Usted no será capaz de revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {   //en caso de confirmar, lo eliminas con el this.deleteEvent.emit(this.usuario);

        this.deleteEvent.emit(this.usuario);

        Swal.fire(    //printa que se a borrado con exito
          'Borrado!',
          'Tu archivo ha sido eliminado.',
          'success'
        )
      }
    })

  }

}
