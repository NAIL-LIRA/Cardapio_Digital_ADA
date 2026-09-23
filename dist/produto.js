export class Produto {
    id;
    nome;
    preco;
    descricao;
    imagemUrl;
    constructor(id, nome, preco, descricao, imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
    }
    // Retorna o HTML do card visual do produto
    gerarHTML() {
        return `
  <div class="card-produto">
      <img src="${this.imagemUrl}" alt="${this.nome}"> 
      <div class="card-conteudo">
          <h3>${this.nome}</h3>
          <p class="descricao">${this.descricao}</p>
          <p class="preco">${this.preco.toFixed(2)}</p>
          <div class="card-acoes">
          <button class="btn-deletar" data-id="${this.id}">Deletar</button>
          </div>
      </div> 
  </div>`;
    }
}
//# sourceMappingURL=produto.js.map