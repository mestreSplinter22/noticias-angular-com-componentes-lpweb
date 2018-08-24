import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-leitor-noticias',
  templateUrl: './leitor-noticias.component.html',
  styleUrls: ['./leitor-noticias.component.css']
})
export class LeitorNoticiasComponent implements OnInit {
  @Input()
  leituraNoticia;

  @Output()
    /**
 * Compomente de cadastro de noticia.
 * Nele temos as variaveis para salvar a noticia e o metado de salvar as noticias
 */

  navegacao = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  irPara(nome) {
    this.navegacao.emit(nome);
  }
  fechar() {
    this.leituraNoticia = null;
    this.irPara('home');
  }
}
