class Pedido {
    constructor(numero, nome, prato) {
        this.numero = numero
        this.nome = nome
        this.prato = prato
    }
}

    class FilaPedidos {
    constructor() {
        this.filaPedidos = []
    }

addPedido (numero, nome, prato) {
    let novoPedido = new Pedido (numero, nome, prato)
    this.filaPedidos.push(novoPedido) // Adiciona ao final da fila
}

tirarPedido() {
    if(this.filaPedidos.length < 1) {
        return null
    }
    return this.filaPedidos.shift() // Remove e retorna o primeiro elemento da fila
}

mostrarPedidos () {
    if (this.filaPedidos.length < 1) {
        console.log("Não há pedidos no momento!")
        return
    }
    for (let pedido of this.filaPedidos) {
        console.log(`Número: ${pedido.numero}, Nome: ${pedido.nome}, Prato: ${pedido.prato}`)

        }   
    }
}


let fila = new FilaPedidos()

fila.addPedido(10, "Joaquim", "Hotdog")
fila.addPedido(20, "Caio", "Pão de Queijo")
fila.addPedido(30, "Fagner", "Coxinha")

fila.mostrarPedidos()

let atenderPedido = fila.tirarPedido()
console.log(`Pedido atendido, Código: ${atenderPedido.numero}, Nome: ${atenderPedido.nome}, Prato: ${atenderPedido.prato} `)