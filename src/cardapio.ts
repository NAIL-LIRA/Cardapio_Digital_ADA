import { Produto } from "./produto.js";

export class Cardapio {
  produtos: Produto[];
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
    this.salvarStorage();
    this.renderizarCardapio("cardapio-conteiner");
  }

  renderizarCardapio(idDoConteiner: string): void {
    const container = document.getElementById(idDoConteiner);

    if (!container) return;

    let htmlFinal = "";
    for (const produto of this.produtos) {
      htmlFinal += produto.gerarHTML();
    }

    container.innerHTML = htmlFinal;
  }

  salvarStorage(): void {
    const dadosParaSalvar = JSON.stringify(this.produtos);
    localStorage.setItem("cardapio_produtos", dadosParaSalvar);
  }

  carregarStorage(): void {
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
      this.renderizarCardapio("cardapio-conteiner");
    }
  }
}
