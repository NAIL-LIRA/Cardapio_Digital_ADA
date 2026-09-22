import { Produto } from "./produto.js";
import { Cardapio } from "./cardapio.js";
const meuCardapio = new Cardapio();
meuCardapio.carregarStorage();
const form = document.getElementById("form-produto");
const containerDoCardapio = document.getElementById("cardapio-conteiner");
const campoBusca = document.getElementById("campo-busca");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nomeImput = document.getElementById("nome")
            .value;
        const precoInput = parseFloat(document.getElementById("preco").value);
        const descricaoInput = document.getElementById("descricao").value;
        const imagemUrlInput = document.getElementById("imagemUrl").value;
        const id = Date.now();
        const novoPrato = new Produto(id, nomeImput, precoInput, descricaoInput, imagemUrlInput);
        meuCardapio.adicionarProduto(novoPrato);
        form.reset();
    });
}
//# sourceMappingURL=main.js.map