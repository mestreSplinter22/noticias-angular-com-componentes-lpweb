import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
/**
 * Output para poder usar o metodo irPara de appComponet
 */
  @Output()
  navegar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Mudança do contudo da tela
   * @param nome
   */
  irPara(nome) {
    this.navegar.emit(nome);
  }
}
