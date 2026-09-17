import { Produto } from "./produto.js";
export class Cardapio {
    produtos;
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) { }
    renderizarCardapio(idDoConteiner) { }
    salvarStorage() {
        const dadosParaSalvar = JSON.stringify(this.produtos);
        localStorage.setItem("cardapio_produtos", dadosParaSalvar);
    }
    carregarStorage() { }
}
//# sourceMappingURL=cardapio.js.map