import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

//importem Sweet Alert, previament l'hem instal.lat al CMD amb npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})


export class RegistreComponent implements OnInit {

  //inicialitzem la variable formBuilder(hem importat a dalt)del tipus FormBuilder
  constructor( private formBuilder: FormBuilder ) { }

  //creem la variable useron desarem les dades que es reben del formulari
  user: FormGroup;
  submitted = false;
  mostrarMissatge = '';

  ngOnInit(): void {

    //posem les condicions dels camps
    this.user = this.formBuilder.group({
      nom: ['', Validators.required],
      cognom: ['', Validators.required],
      edat: ['', Validators.required],
      foto: ['', Validators.required],
      descripcio: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      contrasenya: ['', Validators.required],
      confirmarContrasenya: ['', Validators.required]
    });
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funció per confirmar la contrasenya
  confirmar() {

    const contr = document.getElementById('contrasenya');
    const confirmarContr = document.getElementById('confirmarContrasenya');

    if (contr === confirmarContr) {
      this.mostrarMissatge="Contrasenya confirmada";
    }
    else {
      this.mostrarMissatge="La contrasenya no coincideix";
    }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //funció per facilitar l'accés als controls de formulari desde la plantilla
  get f() {
    return this.user.controls;
  }

  //funció per enviar dades
  enviarDades() {
    this.submitted = true;
    //si cap camp no compleix les condicions
    if ( this.user.invalid) {
      return;
    }


  //si totes les dades i camps són correctes es mostra la següent finestra emergent
    Swal.fire('Les dades introduïdes són correctes');
  }

}
