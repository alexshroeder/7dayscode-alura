class Pedido {
    constructor(numero, nome, prato) {
      this.numero = numero;
      this.nome = nome;
      this.prato = prato;
    }
  }
  
  class FilaDosPedidos {
    constructor() {
      this.filaPedidos = [];
    }
  
    addPedido(numero, nome, prato) {
      this.filaPedidos.push(new Pedido(numero, nome, prato));
    }
  
    tirarPedido() {
      return this.filaPedidos.shift() || null;
    }
  
    mostrarPedidos() {
      if (this.filaPedidos.length === 0) {
        console.log("Não há pedidos no momento!");
      } else {
        for (const pedido of this.filaPedidos) {
          console.log(`Número: ${pedido.numero}, Nome: ${pedido.nome}, Prato: ${pedido.prato}`);
        }
      }
    }
  }
  
  const fila = new FilaDosPedidos();
  
  fila.addPedido(1, "João", "Hambúrguer");
  fila.addPedido(2, "Maria", "Pizza");
  fila.addPedido(3, "José", "Sushi");
  
  fila.mostrarPedidos();
  
  const pedidoAtendido = fila.tirarPedido();
  console.log(`Pedido atendido: Número ${pedidoAtendido?.numero}, Prato: ${pedidoAtendido?.prato}`);
  
  fila.mostrarPedidos();
  