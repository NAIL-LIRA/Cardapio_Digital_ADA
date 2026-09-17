import { Produto } from "./produto.js";

export class Cardapio {
  produtos: Produto[];
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto): void {}

  renderizarCardapio(idDoConteiner: string): void {}

  salvarStorage(): void {
    const dadosParaSalvar = JSON.stringify(this.produtos);
    localStorage.setItem("cardapio_produtos", dadosParaSalvar);
  }

  carregarStorage(): void {}
}
