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

  editarNoticia = null;
  titulo = null;
  conteudo = null;
  autor = null;
  emailDoAutor = null;
  data = null;

  tela = null;

  @Output()
  navegarEdicao = new EventEmitter();

  constructor() { }

  irPara(nome) {
    this.navegarEdicao.emit(nome);
  }

  ngOnInit() {
  }
  date2str(d) {
    if (d) {
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const day = d.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const hours = d.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const minutes = d.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    } else {
      return '';
    }
  }
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

  editar(noticia) {
    this.editarNoticia = noticia;
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.autor = noticia.autor;
    this.emailDoAutor = noticia.emailDoAutor;
    this.data = this.date2str(noticia.data);
    this.irPara('edicao');
  }
  cancelarEdicao() {
    this.editarNoticia = null;
    this.irPara('lista');
  }

}
