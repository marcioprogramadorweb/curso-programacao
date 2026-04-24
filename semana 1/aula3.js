// Exercício 1
let idade = 18;

if(idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Exercício 2
let meta = 300;
let faturamento = 280;

if(faturamento >= meta){
    console.log("Bateu a meta");
} else {
    console.log("Não bateu a meta");
}

// Exercício 3
let numero = 9;

if(numero % 2 === 0){
    console.log("O numero é par");
} else {
    console.log("o numero impar");
}

// Exercício 4
let totalCompra = 150;

if(totalCompra > 100){
    console.log("Compra alta");
} else {
    console.log("Compra comum");
}

// Exercício 5
let nota = 7;

if(nota > 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Exercício 6
let saldo = 50;
let valorSaque = 80;

if(saldo >= valorSaque){
    console.log("Saque permitido");
} else {
    console.log("Saldo insuficiente");
}

// Mini desafio
let metaDiaria = 300;
let faturamentoDia = 340;
let combustivel = 95;
let almoco = 25;

let gastos = combustivel + almoco;
let sobra = faturamentoDia - gastos;

console.log("Faturamento: ", faturamentoDia);
console.log("Gastos: ", gastos);
console.log("Sobra: ", sobra);


if(faturamentoDia >= metaDiaria) {
    console.log("Bateu a meta diária");
} else {
    console.log("Não bateu a meta diária");
}

if(sobra > 200){
    console.log("A sobra é maior que 200");
} else {
    console.log("Sobra de 200 ou menos");
}