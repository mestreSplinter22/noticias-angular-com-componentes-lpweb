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
  navegacao = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
  irPara(nome) {
    this.navegacao.emit(nome);
  }

  /**
   * Fecha a tela de leitua e apresenta a tela home.
   */
  fechar() {
    this.leituraNoticia = null;
    this.irPara('home');
  }
}
