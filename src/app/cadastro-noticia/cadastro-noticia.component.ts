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
  @Input()
  noticias;

  @Output()
/**
   * Emitindo a saida de um evento com algum evento q vc seta no metodo
   saida pro componente host
   * @type {EventEmitter<any>}
   */
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
    this.irPara('lista');
  }
  irPara(nome) {
    this.listarNoticias.emit(nome);
  }
}
