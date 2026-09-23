import { Produto } from "./produto.js";

export class Cardapio {
  produtos: Produto[];
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
    this.salvarStorage();
    this.renderizarCardapio("cardapio-conteiner",true);
  }

  deletarProduto(id: number): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    this.salvarStorage();
    this.renderizarCardapio("cardapio-conteiner",true);
  }

  filtrarPorNome(termo: string,modoAdmin:boolean=false): void {
    const termoFormatado = termo.toLowerCase().trim();

    const produtosFiltrados = this.produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(termoFormatado),
    );

    const conteiner = document.getElementById("cardapio-conteiner");

    if (!conteiner) return;

    let htmlFinal = "";

    for (const produto of produtosFiltrados) {
      htmlFinal += produto.gerarHTML(modoAdmin);
    }

    conteiner.innerHTML = htmlFinal;
  }

  renderizarCardapio(idDoConteiner: string, modoAdmin:boolean=false): void {
    const conteiner = document.getElementById(idDoConteiner);

    if (!conteiner) return;

    let htmlFinal = "";
    for (const produto of this.produtos) {
      htmlFinal += produto.gerarHTML(modoAdmin);
    }

    conteiner.innerHTML = htmlFinal;
  }

  salvarStorage(): void {
    const dadosParaSalvar = JSON.stringify(this.produtos);
    localStorage.setItem("cardapio_produtos", dadosParaSalvar);
  }

  carregarStorage(modoAdmin:boolean=false): void {
    const dadosSalvos = localStorage.getItem("cardapio_produtos");

    if (dadosSalvos) {
      const produtosObjetos = JSON.parse(dadosSalvos);
      this.produtos = [];

      for (const item of produtosObjetos) {
        const novoProduto = new Produto(
          item.id,
          item.nome,
          item.preco,
          item.descricao,
          item.imagemUrl,
        );

        this.produtos.push(novoProduto);
      }
      this.renderizarCardapio("cardapio-conteiner",modoAdmin);
    }
  }
}
