    // Desafio 1
    let listaDasCompras = [
        { nome: 'Maçã', quantidade: 3 },
        { nome: 'Banana', quantidade: 6 },
        { nome: 'Leite', quantidade: 1 }
    ];
    
        // Função que remove itens
        function tirarItem(nome) {
        return listaDasCompras.filter(({nome: n}) => n !== nome);
    }
    
        // Função que adiciona itens
        function addItem (nome, quantidade) { // Adicionar item
        listaDasCompras.push({nome: nome, quantidade: quantidade})
    }
    
        // Função que lista os itens
        function listaDosItens() {
        for (let item of listaDasCompras) {
        console.log(`Item: ${item.nome} | Quantidade: ${item.quantidade}`);
        }
    }
    
        // Adiciona itens
        addItem('Tomate', 3)
        addItem('Alho', 4)
        addItem('Alface', 8)
        
        // Remove itens
        listaDasCompras = tirarItem('');
        
        // Lista os itens
        listaDosItens()