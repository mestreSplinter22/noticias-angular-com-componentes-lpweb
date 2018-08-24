import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {
  @Input()
  noticias;

  /**
   * Atributo de formulario titulo
   * @type {null}
   */
  editarNoticia = null;

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


  @Output()
  /**
   * Emitindo a saida de um evento com algum evento q vc seta no metodo
   saida pro componente host
   * @type {EventEmitter<any>}
   */
  navegarEdicao = new EventEmitter();

  constructor() {
  }

  irPara(nome) {
    this.navegarEdicao.emit(nome);
  }

  ngOnInit() {
  }

  /**
   * Converte um objeto {@link Date} para o formato de string usado no campo do
   * formulário (datetime-local), adotando o formato: YYYY-MM-DDThh:mm, sendo:
   * **YYYY** o ano com quatro dígitos (resultado do método `getFullYear()`),
   * **MM** o mês com dois dígitos (resultado do método `getMonth()`, notar a necessidade
   * de somar 1),
   * **DD** o dia do mês com dois dígitos (resultado do método `getDate()`),
   * **hh** as horas com dois dígitos (resultado do método `getHours()`) e
   * **mm** os minuots com dois dígitos (resultado do método `getMinutes()`)
   * @param d O objeto Date para ser convertido em string
   */
  date2str(d) {
    if (d) {
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toLocaleString(undefined, {minimumIntegerDigits: 2});
      const day = d.getDate().toLocaleString(undefined, {minimumIntegerDigits: 2});
      const hours = d.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
      const minutes = d.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    } else {
      return '';
    }
  }


  /**
   * Salva noticia preenchida com seus atributos no array Noticia
   * @param form
   */
  salvar(form) {
    const noticia = this.noticias.find(n => n.id === this.editarNoticia.id);
    noticia.titulo = this.titulo;
    noticia.conteudo = this.conteudo;
    noticia.autor = this.autor;
    noticia.emailDoAutor = this.emailDoAutor;
    if (this.data) {
      noticia.data = new Date(this.data);
    } else {
      this.data = null;
    }
    this.editarNoticia = null;
    form.reset();
    this.irPara('lista');
  }
  /**
   * Abre a tela de cadastro com o formulário preenchido com os dados da notícia que deve ser editada
   * @param noticia A notícia para ser editada
   */
  editar(noticia) {
    this.editarNoticia = noticia;
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.autor = noticia.autor;
    this.emailDoAutor = noticia.emailDoAutor;
    this.data = this.date2str(noticia.data);
    this.irPara('edicao');
  }

  /**
   * Metado para cancelar a edição da noticia, os atributos do formularios recebem null
   */
  cancelarEdicao() {
    this.editarNoticia = null;
    this.irPara('lista');
  }

}
