import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Noticia} from '../noticia.model';

/**
 * Compomente de cadastro de noticia.
 * Nele temos as variaveis para salvar a noticia e o metado de salvar as noticias
 */
@Component({
  selector: 'app-cadastro-noticia',
  templateUrl: './cadastro-noticia.component.html',
  styleUrls: ['./cadastro-noticia.component.css']
})
export class CadastroNoticiaComponent implements OnInit {
  /**
   * A propriedade de entrada que representa a lista de notícias que devem ser apresentadas
   */
  @Input()
  noticias;

  /**
   * Emitindo a saida de um evento com algum evento que você seta no método
   saida para o componente host
   * @type {EventEmitter<any>}
   */
  @Output()
  listarNoticias = new EventEmitter();

  /**
   * Atributo de formulario titulo
   * @type {null}
   */
  titulo = null;

    /**
   * Atributo de formulario autor.
   * @type {null}
   */
  autor = null;

  /**
   * Atributo de formulario conteudo.
   * @type {null}
   */
  conteudo = null;

  /**
   * Atributo de formulario emailDoAutor.
   * @type {null}
   */
  emailDoAutor = null;
  /**
   * Atributo de formulario data.
   * @type {null}
   */
  data = null;

  constructor() { }

  ngOnInit() {
    console.log(this.noticias);
  }
  /**
   * Salva os dados do formulário de cadastro :
   *
   * No modo de cadastro, cria uma instância de {@link Noticia} e a insere no array
   * [`noticias`]{@link AppComponent#noticias}.
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
    this.irPara('lista');
  }
  irPara(nome) {
    this.listarNoticias.emit(nome);
  }
}
