let inputNome = document.getElementById("nomeUsuario");
let botaoEnviar = document.getElementById("botaoEnviar");
let resultado = document.getElementById("resultado");
let inputIdade = document.getElementById("idadeUsuario");

botaoEnviar.addEventListener("click", function () {
  let nome = inputNome.value.trim();
  let idade = inputIdade.value.trim();

  if (nome === "") {
    resultado.textContent = "Campo obrigatório. Digite seu nome.";
  } else if (idade ==="") {
    resultado.textContent = "Campo obrigatório. Digite sua idade.";
  } else {
    resultado.textContent = `${nome}, cadastro gerado com sucesso. Idade: ${idade} anos.`;
  }
});