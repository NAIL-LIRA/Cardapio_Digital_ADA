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
    deletarProduto(id) {
        this.produtos = this.produtos.filter((produto) => produto.id !== id);
        this.salvarStorage();
        this.renderizarCardapio("cardapio-conteiner");
    }
    filtrarPorNome(termo) {
        const termoFormatado = termo.toLowerCase().trim();
        const produtosFiltrados = this.produtos.filter((produto) => produto.nome.toLowerCase().includes(termoFormatado));
        const conteiner = document.getElementById("cardapio-conteiner");
        if (!conteiner)
            return;
        let htmlFinal = "";
        for (const produto of produtosFiltrados) {
            htmlFinal += produto.gerarHTML();
        }
        conteiner.innerHTML = htmlFinal;
    }
    renderizarCardapio(idDoConteiner) {
        const conteiner = document.getElementById(idDoConteiner);
        if (!conteiner)
            return;
        let htmlFinal = "";
        for (const produto of this.produtos) {
            htmlFinal += produto.gerarHTML();
        }
        conteiner.innerHTML = htmlFinal;
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