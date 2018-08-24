import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';

/**
 * Componente AppComponent.
 *
 * Este componente implementa as seguintes funcionalidades:
 *
 * * apresentar lista das notícias recentes
 * * abrir notícia para leitura
 * * apresentar lista de todas as notícias
 * * cadastrar notícia
 * * editar notícia
 * * excluir notícia
 *
 * O componente utiliza variáveis de controle para tornar as seguintes telas visíveis:
 *
 * * **home**: apresenta a lista das notícias recentes
 * * **leitura**: apresenta uma notícia no modo de leitura
 * * **lista**: apresenta a lista de todas as notícias
 * * **cadastro**: apresenta o formulário de cadastro
 * * **edicao**: apresenta o formulário de edição de uma notícia
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Atributo utilizado para controlar a tela visível
   */
  tela = 'home';

  /**
   * Atributo que representa a lista de notícias (memória)
   */
  noticias = [];

  /**
   * Atributo utilizado para controlar a notícia visível na tela de leitura
   */
  leituraNoticia = null;

  /**
   * Atributo utilizado para controlar quando há uma notícia sendo editada
   */
  editarNoticia = null;

  /**
   * Atributo utilizado para controlar a pesquisa da lista de notícias
   */
  listaPesquisa = null;

  /**
   * Implementação da interface {@link OnInit}. Define dados de exemplo
   */

  ngOnInit() {
    this.noticias.push(new Noticia(
      this.noticias.length,
      'Teste',
      'Conteúdo da notícia',
      'João Silva',
      'joaosilva@gmail.com',
      new Date()
    ));
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
  salvar(noticia) {
    if (!this.editarNoticia) {
      this.noticias.push(new Noticia(
        this.noticias.length,
        noticia.titulo,
        noticia.conteudo,
        noticia.autor,
        noticia.emailDoAutor,
        noticia.data
      ));
    } else {
      const n = this.noticias.find(n => n.id === this.editarNoticia.id);
      n.titulo = noticia.titulo;
      n.conteudo = noticia.conteudo;
      n.autor = noticia.autor;
      n.emailDoAutor = noticia.emailDoAutor;
      n.data = new Date(noticia.data);
    }
    this.editarNoticia = null;
    this.irPara('lista');
  }

  /**
   * Apresenta uma notícia (tela de leitura)
   * @param noticia A notícia que deve ter o conteúdo apresentado
   */
  onMostrou(noticia) {
    this.leituraNoticia = noticia;
    this.irPara('leitura');
  }

  /**
   * Fecha a tela de leitua e apresenta a tela home.
   */
  fechar() {
    this.leituraNoticia = null;
    this.irPara('home');
  }

  /**
   * Encontra e retorna as notícias publicadas.
   *
   * Utiliza os métodos da classe {@link Array}:
   *
   * * `filter()`: para encontrar apenas as notícias publicadas, usando o método
   * [`estahPublicada()`]{@link Noticia#estahPublicada} da classe {@link Noticia}
   * * `sort()`: para ordenar as notícias de forma decrescente pela data
   * @returns Lista das notícias publicadas
   */
  noticiasPublicadas() {
    return this.noticias
      .filter(n => n.estahPublicada())
      .sort((a: Noticia, b: Noticia) => {
        if (b.data < a.data) {
          return -1;
        } else if (b.data > a.data) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  /**
   * Muda a tela visível.
   * @param nome O nome da nova tela (que deve se tornar visível)
   */
  irPara(nome) {
    this.tela = nome;
    if (nome === 'cadastro') {
      this.editarNoticia = null;
    }
  }

  // /**
  //  * Encontra e retorna as notícias para a lista conforme o campo
  //  * de pesquisa [`listaPesquisa`]{@link AppComponent#listaPesquisa}
  //  * considerando que seu valor está presente no título, conteúdo ou
  //  * nome do autor.
  //  *
  //  * @returns A lista de notícias para apresentar
  //  */
  // noticiasParaLista() {
  //   if (this.listaPesquisa) {
  //     return this.noticias.filter(n =>
  //       n.titulo.indexOf(this.listaPesquisa) !== -1
  //       || n.conteudo.indexOf(this.listaPesquisa) !== -1
  //       || n.autor.indexOf(this.listaPesquisa) !== -1
  //     );
  //   } else {
  //     return this.noticias;
  //   }
  // }

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
      const month = (d.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const day = d.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const hours = d.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const minutes = d.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 });
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    } else {
      return '';
    }
  }

  /**
   * Abre a tela de cadastro com o formulário preenchido com os dados da notícia que deve ser editada
   * @param noticia A notícia para ser editada
   */
  editar(noticia) {
    this.editarNoticia = noticia;
    this.editarNoticia.data = this.date2str(this.editarNoticia.data);
    this.irPara('edicao');
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

  // /**
  //  * Cancela a edição de uma notícia e torna visível a tela da lista
  //  */
  // cancelarEdicao() {
  //   this.editarNoticia = null;
  //   this.irPara('lista');
  // }
}
