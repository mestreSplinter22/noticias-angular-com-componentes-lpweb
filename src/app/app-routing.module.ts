import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CadastroNoticiaComponent } from './cadastro-noticia/cadastro-noticia.component';
import {NoticiasRecentesComponent} from './noticias-recentes/noticias-recentes.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroNoticiaComponent },
  // {path: 'todasNoticias', component:NoticiasRecentesComponent}//Apenas para teste
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  exports: [
    RouterModule
  ],  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
