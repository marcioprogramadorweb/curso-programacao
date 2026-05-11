let cards = document.querySelectorAll(".card");
let resultado = document.getElementById("resultado");
let botaoLimpar = document.getElementById("botaoLimpar");

function removerCardAtivo() {
    cards.forEach(function (card) {
        card.classList.remove("card-ativo");
    });
}

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        removerCardAtivo();

        card.classList.add("card-ativo");

        let tituloCard = card.querySelector("h2").textContent;
        let descricaoCard = card.querySelector("p").textContent;

        resultado.textContent = `Plano selecionado: ${tituloCard} - ${descricaoCard}`;
    });
});

botaoLimpar.addEventListener("click", function () {
    removerCardAtivo();
    resultado.textContent = "Nenhum plano escolhido.";
});