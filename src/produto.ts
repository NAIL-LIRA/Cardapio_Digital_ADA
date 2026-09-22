export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public descricao: string,
    public imagemUrl: string,
  ) {}

  // Retorna o HTML do card visual do produto
  gerarHTML(): string {
    return `
  <div class="card-produto">
      <img src="${this.imagemUrl}" alt="${this.nome}"> 
      <div class="card-conteudo">
          <h3>${this.nome}</h3>
          <p class="descricao">${this.descricao}<p/>
          <p class="preco">${this.preco.toFixed(2)}</p>
          <div class="card-acoes">
          <button class="btn-deletar" data-id="${this.id}">Deletar</button>
          </div>
      </div> 
  </div>`;
  }
}
