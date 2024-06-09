/** @format */

// Passo 1: Pegar o elemento HTML das setas avançar e voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

// Passo 2: Pegar todos os cartões
const cartoes = document.querySelectorAll(".cartao");

// Variável para controlar o índice do cartão selecionado
let cartaoAtual = 0;

// Função para atualizar a visibilidade dos cartões
function mostrarCartao(indice) {
  // Esconder todos os cartões
  cartoes.forEach((cartao) => {
    cartao.classList.remove("selecionado");
  });

  // Mostrar o cartão no índice atual
  cartoes[indice].classList.add("selecionado");
}

// Passo 2: Identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", () => {
  if (cartaoAtual < cartoes.length - 1) {
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
  }
});

// Passo 2: Identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", () => {
  if (cartaoAtual > 0) {
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
  }
});

// Mostrar o primeiro cartão ao carregar a página
mostrarCartao(cartaoAtual);
