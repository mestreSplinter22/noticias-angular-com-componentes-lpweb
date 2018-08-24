import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  /**
   * A propriedade de entrada que representa a lista de notícias que devem ser apresentadas
   */
  @Input()
  noticias;
  /**
   * A propriedade de entrada que representa os resultados da busca, refenciando o atributo listaPesquisa de appCompoenent
   */
  @Input()
  listaPesquisa;
  /**
   * O evento que permite o componente hospedado navegar pelo compoentente host atraves do metodo irPara()
   */
  @Output()
  listarNoticias = new EventEmitter();

  @Output()
    editarNoticia = new EventEmitter();
  constructor() { }

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

  editar(noticia) {
    this.editarNoticia.emit(noticia);

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
  /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
  irPara(nome) {
    this.listarNoticias.emit(nome);
  }
}
