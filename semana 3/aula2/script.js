let card = document.querySelector(".card");
let cardTitulo = document.querySelector(".card-titulo");
let cardTexto = document.querySelector(".card-texto");

let botaoSucesso = document.querySelector(".botao-sucesso");
let botaoAlerta = document.querySelector(".botao-alerta");
let botaoErro = document.querySelector(".botao-erro");
let botaoAndamento = document.querySelector(".botao-andamento");
let botaoLimpar = document.querySelector(".botao-limpar");


function limparClassesStatus() {
  card.classList.remove("status-sucesso");
  card.classList.remove("status-alerta");
  card.classList.remove("status-erro");
  card.classList.remove("status-andamento");
}

botaoSucesso.addEventListener("click", function () {
  limparClassesStatus();

  card.classList.add("status-sucesso");
  cardTitulo.textContent = "Status: sucesso";
  cardTexto.textContent = "Tudo certo. A tarefa foi concluída.";
});

botaoAlerta.addEventListener("click", function () {
  limparClassesStatus();

  card.classList.add("status-alerta");
  cardTitulo.textContent = "Status: atenção";
  cardTexto.textContent = "Atenção: existe algo que precisa ser verificado.";
});

botaoErro.addEventListener("click", function () {
  limparClassesStatus();

  card.classList.add("status-erro");
  cardTitulo.textContent = "Status: erro";
  cardTexto.textContent = "Não foi possível concluir a operação.";
});

botaoLimpar.addEventListener("click", function () {
  limparClassesStatus();

  cardTitulo.textContent = "Status atual";
  cardTexto.textContent = "Aguardando ação do usuário.";
});

botaoAndamento.addEventListener("click", function () {
  limparClassesStatus();

  card.classList.add("status-andamento");
  cardTitulo.textContent = "Status: em andamento";
  cardTexto.textContent = "A tarefa está sendo executada no momento.";
});