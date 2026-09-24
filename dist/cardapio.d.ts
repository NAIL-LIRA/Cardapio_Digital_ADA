import { Produto } from "./produto.js";
export declare class Cardapio {
    produtos: Produto[];
    constructor();
    adicionarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
    filtrarPorNome(termo: string, modoAdmin?: boolean): void;
    renderizarCardapio(idDoConteiner: string, modoAdmin?: boolean): void;
    salvarStorage(): void;
    carregarStorage(modoAdmin?: boolean): void;
}
//# sourceMappingURL=cardapio.d.ts.map