import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { GuiaDtectorComponent } from './paginas/guia-dtector/guia-dtector.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { RecomendacionesComponent } from './componentes/recomendaciones/recomendaciones.component';
import { DigiDigitsComponent } from './paginas/digi-digits/digi-digits.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    GuiaDtectorComponent,
    VideosComponent,
    RecomendacionesComponent,
    DigiDigitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
