function calcularRankeadas(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel = "";

 
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }


  return { saldo, nivel };
}


let jogadores = [
  { vitorias: 5, derrotas: 2 },
  
];


for (let i = 0; i < jogadores.length; i++) {
  let jogador = jogadores[i];
  let resultado = calcularRankeadas(jogador.vitorias, jogador.derrotas);

  console.log(`O herói tem o saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`);
}