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
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
  irPara(nome){
    this.navegar.emit(nome);
  }
}
