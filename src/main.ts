import { Produto } from "./produto.js";
import { Cardapio } from "./cardapio.js";

const meuCardapio = new Cardapio();
meuCardapio.carregarStorage();

const form = document.getElementById("form-produto") as HTMLFormElement;

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeImput = (document.getElementById("nome") as HTMLInputElement)
      .value;

    const precoInput = parseFloat(
      (document.getElementById("preco") as HTMLInputElement).value,
    );

    const descricaoInput = (
      document.getElementById("descricao") as HTMLInputElement
    ).value;

    const imagemUrlInput = (
      document.getElementById("imagemUrl") as HTMLInputElement
    ).value; //pelo que ta aqui a imagem não pode estar no computador, tem que estar em uma página da internet
    //<input type="file"> e URL.createObjectURL().

    const id = Date.now();

    const novoPrato = new Produto(
      id,
      nomeImput,
      precoInput,
      descricaoInput,
      imagemUrlInput,
    );

    meuCardapio.adicionarProduto(novoPrato);

    form.reset();
  });
}
