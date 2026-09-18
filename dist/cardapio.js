import { Produto } from "./produto.js";
export class Cardapio {
    produtos;
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvarStorage();
        this.renderizarCardapio("cardapio-conteiner");
    }
    renderizarCardapio(idDoConteiner) {
        const container = document.getElementById(idDoConteiner);
        if (!container)
            return;
        let htmlFinal = "";
        for (const produto of this.produtos) {
            htmlFinal += produto.gerarHTML();
        }
        container.innerHTML = htmlFinal;
    }
    salvarStorage() {
        const dadosParaSalvar = JSON.stringify(this.produtos);
        localStorage.setItem("cardapio_produtos", dadosParaSalvar);
    }
    carregarStorage() {
        const dadosSalvos = localStorage.getItem("cardapio_produtos");
        if (dadosSalvos) {
            const produtosObjetos = JSON.parse(dadosSalvos);
            this.produtos = [];
            for (const item of produtosObjetos) {
                const novoProduto = new Produto(item.id, item.nome, item.preco, item.descricao, item.imagemUrl);
                this.produtos.push(novoProduto);
            }
            this.renderizarCardapio("cardapio-conteiner");
        }
    }
}
//# sourceMappingURL=cardapio.js.map