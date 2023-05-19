class Produto {
  constructor(id, nome, quantidade) {
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
  }
}

class Node {
  constructor(produto) {
    this.esquerda = null;
    this.direita = null;
    this.produto = produto;
  }
}

class ArvoreProduto {
  constructor() {
    this.raiz = null;
  }

  inserirProduto(id, nome, quantidade) {
    const produto = new Produto(id, nome, quantidade);
    if (this.raiz === null) {
      this.raiz = new Node(produto);
    } else {
      this._inserirProduto(produto, this.raiz);
    }
  }

  _inserirProduto(produto, node) {
    if (produto.id < node.produto.id) {
      if (node.esquerda === null) {
        node.esquerda = new Node(produto);
      } else {
        this._inserirProduto(produto, node.esquerda);
      }
    } else if (produto.id > node.produto.id) {
      if (node.direita === null) {
        node.direita = new Node(produto);
      } else {
        this._inserirProduto(produto, node.direita);
      }
    } else {
      node.produto = produto; // se o ID já existe, atualiza as informações do produto
    }
  }

  buscarProduto(id) {
    return this._buscarProduto(id, this.raiz);
  }

  _buscarProduto(id, node) {
    if (node === null || node.produto.id === id) {
      return node;
    } else if (id < node.produto.id) {
      return this._buscarProduto(id, node.esquerda);
    } else {
      return this._buscarProduto(id, node.direita);
    }
  }
}

const arvore = new ArvoreProduto();

arvore.inserirProduto(1, 'Bolsa', 1);
arvore.inserirProduto(2, 'Chinelo', 2);
arvore.inserirProduto(3, 'Jaqueta', 4);

const produtoBuscado1 = arvore.buscarProduto(2);
console.log(produtoBuscado1.produto.nome); // Retorna o produto

const produtoBuscado2 = arvore.buscarProduto(20);
console.log(produtoBuscado2); // Retorna null
