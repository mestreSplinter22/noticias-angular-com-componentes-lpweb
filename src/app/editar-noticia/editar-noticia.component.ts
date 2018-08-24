import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {
  @Input()
  noticias;
  @Input()
    tela;

  titulo = null;
  conteudo = null;
  autor = null;
  emailDoAutor = null;
  data = null;


  @Output()
  navegarEdicao = new EventEmitter(); //Navegação atraves do metodo irPara()

  @Output()
  salvarEdicao = new EventEmitter();

  constructor() { }
  /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
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
  * Busca a notícia pelo identificador de [`editarNoticia`]{@link AppComponent#editarNoticia} e
  * atualiza os dados conforme o formulário
  * @param form O formulário de cadastro
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
  irPara(nome) {
    this.navegarEdicao.emit(nome);
  }

}
