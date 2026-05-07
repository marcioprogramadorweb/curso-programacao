let cards = document.querySelectorAll(".card");
let botoesDestacar = document.querySelectorAll(".botao-destacar");

let botaoDestacarTodos = document.getElementById("botaoDestacarTodos");
let botaoLimparTodos = document.getElementById("botaoLimparTodos");
let botaoAlternarTodos = document.getElementById("botaoAlternarTodos");

botoesDestacar.forEach(function (botao, indice) {
    botao.addEventListener("click", function () {
        cards[indice].classList.add("card-destaque");
    });
});

botaoDestacarTodos.addEventListener("click", function (){
    cards.forEach(function (card) {
        card.classList.add("card-destaque");
    });
});

botaoLimparTodos.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.classList.remove("card-destaque");
    });
});

botaoAlternarTodos.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.classList.toggle("card-destaque");
    });
});