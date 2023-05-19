class Jogo {
    constructor() {
      this.pontuacao = {};
    }
  
    adicionarJogador(usuario) {
      this.pontuacao[usuario] = 0;
    }
  
    atualizarPontuacao(usuario, pontos) {
      if (usuario in this.pontuacao) {
        this.pontuacao[usuario] += pontos;
      }
    }
  
    removerJogador(usuario) {
      delete this.pontuacao[usuario];
    }
  
    listarPontuacao() {
      if (Object.keys(this.pontuacao).length === 0) {
        console.log("Não há jogadores nesta rodada no momento!");
        return;
      }
      const ranking = Object.entries(this.pontuacao).sort((a, b) => b[1] - a[1]);
      for (const [usuario, pontos] of ranking) {
        console.log(`${usuario}: ${pontos} pontos`);
      }
    }
  
    obterVencedor() {
      const maxPontos = Math.max(...Object.values(this.pontuacao));
      for (const [usuario, pontos] of Object.entries(this.pontuacao)) {
        if (pontos === maxPontos) {
          console.log(`O usuário ${usuario} venceu o jogo com ${pontos} pontos!`);
          return usuario;
        }
      }
    }
  }
  
  const jogo = new Jogo();
  
  jogo.adicionarJogador('BlueKnight');
  jogo.adicionarJogador('SuperDash');
  jogo.adicionarJogador('Pizzu');
  jogo.adicionarJogador('FlagHacker');
  jogo.atualizarPontuacao('BlueKnight', 20);
  jogo.atualizarPontuacao('FlagHacker', 40);
  jogo.atualizarPontuacao('Pizzu', 70);
  jogo.atualizarPontuacao('SuperDash', 10);
  
  jogo.listarPontuacao();
  
  jogo.removerJogador('SuperDash');
  
  jogo.listarPontuacao();
  
  jogo.obterVencedor();
  