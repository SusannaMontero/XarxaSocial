import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LlistaUsComponent } from './components/admin/llista-us/llista-us.component';
import { HeaderComponent } from './components/header/header.component';
import { IniciComponent } from './components/inici/inici.component';
import { DetallComponent } from './components/perfil/detall/detall.component';
import { LlistaComponent } from './components/perfil/llista/llista.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistreComponent } from './components/perfil/registre/registre.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'inici'},
{ path: 'llista', component: LlistaComponent},
{ path: 'registre', component: RegistreComponent}, 
{ path: 'inici', component: IniciComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'header', component: HeaderComponent },
{ path: 'llista-us', component: LlistaUsComponent },
{ path: 'perfil', component: PerfilComponent },
{ path: 'detall', component: DetallComponent },
{ path: '**', redirectTo: 'inici' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
