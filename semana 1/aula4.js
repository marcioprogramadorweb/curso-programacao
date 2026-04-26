// Exercício 1
let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Exercício 2
let hora = 14;

if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

// Exercício 3
let saldo = 0;

if (saldo >= 1000) {
    console.log("Saldo alto");
} else if (saldo >= 1) {
    console.log("Saldo baixo");
} else {
    console.log("Sem saldo");
}

// Exercício 4
let temperatura = 31;

if (temperatura < 20) {
    console.log("Frio");
} else if (temperatura < 30) {
    console.log("Agradável");
} else {
    console.log("Quente");
}

// Exercício 5
let faturamento = 260;

if (faturamento >= 350) {
    console.log("Dia excelente");
} else if (faturamento >= 300) {
    console.log("Dia bom");
} else if (faturamento >= 200) {
    console.log("Dia razoável");
} else {
    console.log("Dia fraco");
}

// Exercício 6
 let notaex6 = 5;

if (notaex6 >= 9) {
    console.log("Excelente");
} else if (notaex6 >= 7) {
     console.log("Aprovado");
} else if (notaex6 >= 5) {
     console.log("Recuperação");
} else {
     console.log("Reprovado");
}

// Mini desafio
let metaDiaria = 300;
let faturamentoDia = 340;
let combustivel = 95;
let almoco = 25;
let manutencao = 30;

let gastos = combustivel + almoco + manutencao;
let sobra = faturamentoDia - gastos;
let tipoSobra;
let dia;

if (faturamentoDia >= 400) {
    dia = "Dia excelente";
} else if (faturamentoDia >= 300) {
    dia = "Dia bom";
} else if (faturamentoDia >= 200) {
    dia = "Dia razoável";
} else {
    dia = "Dia fraco";
}

if (sobra >= 220) {
    tipoSobra = "Sobra excelente";
} else if (sobra >= 180) {
    tipoSobra = "Sobra boa";
} else if (sobra >= 120) {
    tipoSobra = "Sobra apertada";
} else {
    tipoSobra = "Sobra fraca";
}

console.log("Faturamento: ", faturamentoDia);
console.log("Gastos: ", gastos );
console.log("Sobra: ", sobra );
console.log("Classificação do faturamento: ",  dia);
console.log("Classificação da sobra: ",  tipoSobra);