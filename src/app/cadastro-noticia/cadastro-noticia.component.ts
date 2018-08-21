import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Noticia} from '../noticia.model';

@Component({
  selector: 'app-cadastro-noticia',
  templateUrl: './cadastro-noticia.component.html',
  styleUrls: ['./cadastro-noticia.component.css']
})
export class CadastroNoticiaComponent implements OnInit {
  @Input()
  noticias;

  @Output()
  cadastro = new EventEmitter<Noticia>();

  titulo = null;
  autor = null;
  conteudo = null;
  emailDoAutor = null;
  data = null;

  constructor() { }

  ngOnInit() {
    console.log(this.noticias);
  }
  /**
   * Salva os dados do formulário de cadastro em dois modos:
   *
   * * **cadastro**: quando [`editarNoticia`]{@link AppComponent#editarNoticia} não está definido; e
   * * **edição**, cc.
   *
   * Quando está no modo de cadastro, cria uma instância de {@link Noticia} e a insere no array
   * [`noticias`]{@link AppComponent#noticias}.
   *
   * Quando está no modo de edição, busca a notícia pelo identificador de [`editarNoticia`]{@link AppComponent#editarNoticia} e
   * atualiza os dados conforme o formulário
   *
   * @param form O formulário de cadastro
   */
  salvar(form) {
    const noticia = new Noticia(
        this.noticias.length,
        this.titulo,
        this.conteudo,
        this.autor,
        this.emailDoAutor,
        this.data
      );
      this.noticias.push(noticia);
    form.reset();
  }
}
