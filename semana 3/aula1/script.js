let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");
let caixa = document.getElementById("caixa");
let botaoCaixa = document.getElementById("botaoCaixa");
let botaoAlternar = document.getElementById("botaoAlternar");

let botaoTitulo = document.getElementById("botaoTitulo");
let botaoDescricao = document.getElementById("botaoDescricao");
let botaoDestaque = document.getElementById("botaoDestaque");
let botaoLimpar = document.getElementById("botaoLimpar");

botaoTitulo.addEventListener("click", function () {
  titulo.textContent = "DOM na prática";
});

botaoDescricao.addEventListener("click", function () {
  descricao.textContent = "Agora estou manipulando elementos HTML com JavaScript.";
});

botaoDestaque.addEventListener("click", function () {
  caixa.classList.add("destaque");
  caixa.textContent = "Agora esta caixa recebeu destaque.";
});

botaoLimpar.addEventListener("click", function () {
  caixa.classList.remove("destaque");
  caixa.textContent = "Esta é uma caixa que será manipulada pelo JavaScript.";
});

botaoCaixa.addEventListener("click", function () {
  caixa.textContent = "O texto da caixa foi alterado separadamente.";
});

botaoAlternar.addEventListener("click", function () {
  caixa.classList.toggle("destaque");
});