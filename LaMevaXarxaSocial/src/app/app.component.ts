import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LaMevaXarxaSocial';


  // es declara i inicialitza la variable category per assignar a l'html d'aquest component el click sel.leccionat del menú
  category: string ='All';



// FUNCIO per canviar d'event al menú segons sel.lecció amb click, entre PERFIL i ADMIN

  canviEvent(category: string): void {
    this.category = category;
  }
}
