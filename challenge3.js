// Definir a estrutura de um nó da lista
class node {
    constructor(produto) {
      this.produto = produto // Objeto contendo as informações do produto
      this.next = null // Referência para o próximo nó
      this.previous = null // Referência para o nó anterior
    }
}

// Definir a classe da lista duplamente encadeada
class ListaDuplamenteEncadeada {
    constructor() {
      this.head = null // Referência para o primeiro nó da lista
      this.tail = null // Referência para o último nó da lista
    }

    // Adicionar um produto à lista
    adicionarProduto(produto) {
    const newNode = new node(produto) // Cria um novo nó com o produto

    // Caso a lista esteja vazia
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.previous = this.tail // Define o nó anterior do novo nó como o nó atual da calda
      this.tail.next = newNode // Define o próximo nó do nó atual da calda como o novo nó
      this.tail = newNode // Define o novo nó como o novo nó da calda
    }
}

    // Remover um produto da lista
    removerProduto(códigoDeBarras) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.produto.códigoDeBarras === códigoDeBarras) {
        if (currentNode === this.head) this.head = currentNode.next
        if (currentNode === this.tail) this.tail = currentNode.previous
        if (currentNode.previous) currentNode.previous.next = currentNode.next
        if (currentNode.next) currentNode.next.previous = currentNode.previous
        break
      }
        currentNode = currentNode.next
    }
  }

  // Atualizar a quantidade em estoque de um produto
  atualizarEstoque(códigoDeBarras, novaQuantidade) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.produto.códigoDeBarras === códigoDeBarras) {
        currentNode.produto.quantidade = novaQuantidade
        break
      }
      currentNode = currentNode.next
    }
  }

  // Listar todos os produtos da lista
  listarProdutos() {
    let currentNode = this.head
    while (currentNode) {
      const { nome, códigoDeBarras, preço, quantidade } = currentNode.produto
      console.log(`Nome: ${nome}, Código de Barras: ${códigoDeBarras}, Preço: ${preço}, Quantidade: ${quantidade}`)
      currentNode = currentNode.next
    }
}
}

const lista = new ListaDuplamenteEncadeada()

const produto1 = {
    nome: 'Produto 1',
    códigoDeBarras: '123456789',
    preço: 10.99,
    quantidade: 5
}

const produto2 = {
    nome: 'Produto 2',
    códigoDeBarras: '987654321',
    preço: 19.99,
    quantidade: 3
}

const produto3 = {
    nome: `Produto 3`,
    códigoDeBarras: `135791113`,
    preço: `25,50`,
    quantidade: `2`
}

// Adicionar produtos à lista
lista.adicionarProduto(produto1)
lista.adicionarProduto(produto2)
lista.adicionarProduto(produto3)

// Atualizar a quantidade em estoque de um produto
lista.atualizarEstoque('123456789', 2)

// Remover um produto da lista
    // lista.removerProduto('987654321')

// Listar os produtos
lista.listarProdutos()