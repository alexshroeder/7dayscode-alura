class Livro {
    constructor(nome, numeroDePaginas) {
      this.nome = nome;
      this.numeroDePaginas = numeroDePaginas;
    }
  }
  
  class PilhaDeLivros {
    constructor() {
      this.pilhaLivros = [];
    }
  
    adicionarLivro(nome, numeroDePaginas) {
      const novoLivro = new Livro(nome, numeroDePaginas);
      this.pilhaLivros.push(novoLivro); // Adiciona no final da pilha
    }
  
    removerLivro() {
      if (this.pilhaLivros.length < 1) {
        return null;
      }
      return this.pilhaLivros.pop(); // Remove e retorna o último elemento adicionado na pilha
    }
  
    mostrarLivroTopo() {
      const ultimoIndex = this.pilhaLivros.length - 1;
      console.log(`O livro que está no topo é ${this.pilhaLivros[ultimoIndex].nome}`);
      return this.pilhaLivros[ultimoIndex];
    }
  
    mostrarLivros() {
      if (this.pilhaLivros.length < 1) {
        console.log("Não há livros na pilha no momento!");
        return;
      }
      for (const livro of this.pilhaLivros) {
        console.log(`Nome: ${livro.nome}, número de páginas: ${livro.numeroDePaginas}`);
      }
    }
  }
  
  const pilha = new PilhaDeLivros();
  
  pilha.adicionarLivro("Starwars - Herdeiro do Império", 472);
  pilha.adicionarLivro("Crônicas de Nárnia ", 752);
  pilha.adicionarLivro("Homem Formiga - Inimigo Natural", 256);
  pilha.adicionarLivro("Batman - Piada Mortal", 256);
  pilha.adicionarLivro("A Ascensão de Kylo Ren", 104);
  
  pilha.mostrarLivros();
  
  const livroRemovido = pilha.removerLivro();
  console.log(`Livro removido da pilha: Nome ${livroRemovido.nome}, número de páginas: ${livroRemovido.numeroDePaginas}`);
  
  pilha.mostrarLivros();
  