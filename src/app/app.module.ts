import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { BarraComponent } from './barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
