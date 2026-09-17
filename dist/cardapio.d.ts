import { Produto } from "./produto.js";
export declare class Cardapio {
    produtos: Produto[];
    constructor();
    adicionarProduto(produto: Produto): void;
    renderizarCardapio(idDoConteiner: string): void;
    salvarStorage(): void;
    carregarStorage(): void;
}
//# sourceMappingURL=cardapio.d.ts.map