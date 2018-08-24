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
   * Emitindo a saida de um evento com algum evento q vc seta no metodo
   saida pro componente host
   * @type {EventEmitter<any>}
   */
  navegacao = new EventEmitter();

  constructor() {
  }

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
