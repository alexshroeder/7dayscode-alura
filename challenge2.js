// Desafio 2

// Definindo a estrutura do paciente
class Paciente {
    constructor(nome, identificacao, estadoSaude) {
      this.nome = nome;
      this.identificacao = identificacao;
      this.estadoSaude = estadoSaude;
      this.proximo = null;
    }
  }
  
  // Implementando a lista encadeada de pacientes
  class ListaPacientes {
    constructor() {
      this.primeiro = null; // Aponta para o primeiro paciente da lista
      this.ultimo = null; // Aponta para o último paciente da lista
    }
  
    // Método para adicionar um paciente à lista
    adicionarPaciente(nome, identificacao, estadoSaude) {
      const novoPaciente = new Paciente(nome, identificacao, estadoSaude);
  
      if (this.primeiro === null) {
        // Se a lista estiver vazia, o novo paciente será o primeiro e o último
        this.primeiro = novoPaciente;
        this.ultimo = novoPaciente;
      } else {
        // Caso contrário, adicionamos o novo paciente ao final da lista
        this.ultimo.proximo = novoPaciente;
        this.ultimo = novoPaciente;
      }
    }
  
    // Método para remover um paciente da lista com base na identificação
    removerPaciente(identificacao) {
      let pacienteAtual = this.primeiro;
      let pacienteAnterior = null;
  
      while (pacienteAtual !== null) {
        if (pacienteAtual.identificacao === identificacao) {
          // Encontramos o paciente a ser removido
  
          if (pacienteAnterior === null) {
            // O paciente é o primeiro da lista
            this.primeiro = pacienteAtual.proximo;
          } else {
            // O paciente não é o primeiro da lista
            pacienteAnterior.proximo = pacienteAtual.proximo;
          }
  
          if (pacienteAtual === this.ultimo) {
            // O paciente é o último da lista
            this.ultimo = pacienteAnterior;
          }
  
          break;
        }
  
        pacienteAnterior = pacienteAtual;
        pacienteAtual = pacienteAtual.proximo;
      }
    }
  
    // Método para listar todos os pacientes da lista
    listarPacientes() {
      let pacienteAtual = this.primeiro;
  
      while (pacienteAtual !== null) {
        console.log(`Nome: ${pacienteAtual.nome}, ID: ${pacienteAtual.identificacao}, Estado de saúde: ${pacienteAtual.estadoSaude}`);
        pacienteAtual = pacienteAtual.proximo;
      }
    }
  }
  
  // Testando o sistema
  const lista = new ListaPacientes();
  
  // Adicionando pacientes
  lista.adicionarPaciente('João', 1, 'estável');
  lista.adicionarPaciente('Maria', 2, 'em tratamento intensivo');
  lista.adicionarPaciente('Pedro', 3, 'em estado crítico');
  lista.adicionarPaciente('Alex', 4, 'em avaliação' )
  
  // Listando pacientes
  console.log('Lista de pacientes:');
  lista.listarPacientes();
  

  