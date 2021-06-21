import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiaDtectorComponent } from './paginas/guia-dtector/guia-dtector.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'dtector', component:GuiaDtectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
