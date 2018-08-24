import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {
  /**
   * A propriedade de entrada que representa a lista de notícias que devem ser apresentadas
   */
  @Input()
  noticias;
  /**
   * A propriedade de entrada que representa as telas  que devem ser apresentadas
   */
  @Input()
    tela;
  /**
   * Atributo de formulario titulo
   * @type {null}
   */
  titulo = null;
  /**
   * Atributo de formulario conteudo
   * @type {null}
   */
  conteudo = null;
  /**
   * Atributo de formulario autor
   * @type {null}
   */
  autor = null;
  /**
   * Atributo de formulario emailDoAutor
   * @type {null}
   */
  emailDoAutor = null;
  /**
   * Atributo de formulario data
   * @type {null}
   */
  data = null;

  /**
   * O evento que permite o componente host saber qual tela sera chamada
   */
  @Output()
  navegarEdicao = new EventEmitter();
  /**
   * O evento que permite o componente host salvar as alterações feitas nas noticias
   */
  @Output()
  salvarEdicao = new EventEmitter();

  constructor() { }
  /**
   * Implementação da interface {@link OnInit}. Define dados de noticia caso exista objetos de noticias
   */
  ngOnInit() {
    if (this.noticias) {
      this.titulo = this.noticias.titulo;
      this.conteudo = this.noticias.conteudo;
      this.autor = this.noticias.autor;
      this.emailDoAutor = this.noticias.emailDoAutor;
      this.data = this.noticias.data;
      }
  }
  /**
  * * Salva os dados do formulário de Edição:
  * atualiza os dados conforme o formulário
   * **/
  salvar() {
    const noticia = {
     titulo : this.titulo,
     conteudo : this.conteudo,
     autor : this.autor,
     emailDoAutor : this.emailDoAutor,
  };
    this.irPara('lista');

    this.salvarEdicao.emit(noticia);
  }
  /**
   * Cancela a edição de uma notícia e torna visível a tela da lista
   */
  cancelarEdicao() {
    this.irPara('lista');
  }
  /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
  irPara(nome) {
    this.navegarEdicao.emit(nome);
  }

}
