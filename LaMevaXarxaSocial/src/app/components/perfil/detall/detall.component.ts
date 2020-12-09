import { Component, OnInit, Input } from '@angular/core';
import { Usuari } from '../llista/Usuari.llista';

@Component({
  selector: 'app-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {

// El imput serveis per passar la informació del component pare al component fill
  @Input() usuari: Usuari = null;

  constructor() { }

  ngOnInit(): void {
  }

}
