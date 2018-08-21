import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { BarraComponent } from './barra/barra.component';
import { CadastroNoticiaComponent } from './cadastro-noticia/cadastro-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    BarraComponent,
    CadastroNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
