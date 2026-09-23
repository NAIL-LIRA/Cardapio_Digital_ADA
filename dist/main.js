import { Produto } from "./produto.js";
import { Cardapio } from "./cardapio.js";
const meuCardapio = new Cardapio();
meuCardapio.carregarStorage();
const form = document.getElementById("form-produto");
const conteinerDoCardapio = document.getElementById("cardapio-conteiner");
const campoBusca = document.getElementById("campo-busca");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nomeImput = document.getElementById("nome")
            .value;
        const precoInput = parseFloat(document.getElementById("preco").value);
        const descricaoInput = document.getElementById("descricao").value;
        // const imagemUrlInput = (
        //   document.getElementById("imagemUrl") as HTMLInputElement
        // ).value; //pelo que ta aqui a imagem não pode estar no computador, tem que estar em uma página da internet
        // //<input type="file"> e URL.createObjectURL().
        const inputArquivo = document.getElementById("imagemFile");
        const arquivo = inputArquivo.files ? inputArquivo.files[0] : null;
        const imagemUrl = arquivo
            ? URL.createObjectURL(arquivo)
            : "https://via.placeholder.com/300x180?text=Sem+Imagem";
        const id = Date.now();
        const novoPrato = new Produto(id, nomeImput, precoInput, descricaoInput, imagemUrl);
        meuCardapio.adicionarProduto(novoPrato);
        form.reset();
    });
}
if (conteinerDoCardapio) {
    conteinerDoCardapio.addEventListener("click", (event) => {
        const alvo = event.target;
        if (alvo.classList.contains("btn-deletar")) {
            const id = Number(alvo.getAttribute("data-id"));
            if (id) {
                const confirmou = confirm(`Tem certeza que deseja excluir esse item?`);
                if (confirmou) {
                    meuCardapio.deletarProduto(id);
                }
            }
        }
    });
}
if (campoBusca) {
    campoBusca.addEventListener("input", () => {
        meuCardapio.filtrarPorNome(campoBusca.value);
    });
}
//# sourceMappingURL=main.js.map