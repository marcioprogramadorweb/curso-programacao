let botaoMensagem = document.getElementById("botaoMensagem");
let mensagem = document.getElementById("mensagem");
let status = document.getElementById("status");

botaoMensagem.addEventListener("click", function () {
  mensagem.textContent = "Estou avançando para construir páginas interativas.";
  status.textContent = "Status: botão clicado com sucesso.";
});