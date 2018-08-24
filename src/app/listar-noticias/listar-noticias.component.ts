import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  @Input()
  noticias;
  @Input()
  listaPesquisa;

  @Output()

  /**
   * Emitindo a saida de um evento com algum evento q vc seta no metodo
   saida pro componente host
   * @type {EventEmitter<any>}
   */
  listarNoticias = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Encontra e retorna as notícias para a lista conforme o campo
   * de pesquisa [`listaPesquisa`]{@link AppComponent#listaPesquisa}
   * considerando que seu valor está presente no título, conteúdo ou
   * nome do autor.
   *
   * @returns A lista de notícias para apresentar
   */
  noticiasParaLista() {
    if (this.listaPesquisa) {
      return this.noticias.filter(n =>
        n.titulo.indexOf(this.listaPesquisa) !== -1
        || n.conteudo.indexOf(this.listaPesquisa) !== -1
        || n.autor.indexOf(this.listaPesquisa) !== -1
      );
    } else {
      return this.noticias;
    }
  }

  /**
   * Exclui uma notícia, após confirmação
   * @param noticia A notícia para ser excluída
   */
  excluir(noticia) {
    if (confirm(`Tem certeza que deseja excluir a notícia: ${noticia.titulo} ?`)) {
      this.noticias.splice(this.noticias.findIndex(n => n.id === noticia.id), 1);
    }
  }

  irPara(nome) {
    this.listarNoticias.emit(nome);
  }
}
