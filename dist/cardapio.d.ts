import { Produto } from "./produto.js";
export declare class Cardapio {
    static readonly CHAVE_STORAGE = "cardapio_produtos";
    produtos: Produto[];
    constructor();
    adicionarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
    filtrarPorNome(termo: string): void;
    renderizarCardapio(idDoConteiner: string): void;
    salvarStorage(): void;
    carregarStorage(): void;
}
//# sourceMappingURL=cardapio.d.ts.map