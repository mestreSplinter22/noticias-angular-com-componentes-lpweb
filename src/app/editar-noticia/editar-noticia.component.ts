import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  irPara(nome) {
    this.tela = nome;
    if (nome === 'cadastro') {
      this.editarNoticia = null;
      this.titulo = null;
      this.conteudo = null;
      this.autor = null;
      this.emailDoAutor = null;
      this.data = null;
    }
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
  editar(noticia) {
    this.editarNoticia = noticia;
    this.titulo = noticia.titulo;
    this.conteudo = noticia.conteudo;
    this.autor = noticia.autor;
    this.emailDoAutor = noticia.emailDoAutor;
    this.data = this.date2str(noticia.data);
    this.irPara('edicao');
  }

}
