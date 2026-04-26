// Exercício 1
let faturamentoDia = 320;
let combustivel = 100;
let almoco = 25;
let metaDiaria = 300;

let gastos = combustivel + almoco;
let sobra = faturamentoDia - gastos;

console.log("Faturamento: ", faturamentoDia);
console.log("Gastos: ", gastos);
console.log("Sobra: ", sobra);
if (faturamentoDia >= metaDiaria && sobra >= 180) {
    console.log("Dia bom");
} else {
    console.log("Dia abaixo do ideal");
}

// Exercício 2
let nota = 8;
let frequencia = 70;

if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else if (nota >= 7 && frenquencia < 75) {
    console.log("Reporvado por faltas");
} else {
    console.log("Reprovado por nota");
}

// Exercício 3
let usuarioCorreto = true;
let senhaCorreta = false;
let usuarioBloqueado = false;

if (usuarioBloqueado) {
    console.log("Usuário bloqueado");
} else if (usuarioCorreto && senhaCorreta) {
    console.log("Acesso autorizado");
} else {
    console.log("Usuário ou senha inválidos");
}

// Exercício 4
let valorCompra = 120;
let clienteVip = false;
let cupomValido = true;

let desconto = valorCompra >= 150 || clienteVip || cupomValido;
if (desconto) {
    console.log("Desconto aplicado");
} else {
    console.log("Sem desconto");    
}

// Exercício 5
let saldo = 750;

if (saldo >=  2000) {
    console.log("Saldo alto");
} else if (saldo >= 1000) {
    console.log("Saldo médio");
} else if (saldo > 0) {
    console.log("Saldo baixo");
} else {
    console.log("Sem saldo");
}

// Mini desafio
let metaDiariaDF = 300;
let faturamentoDiaDF = 360;
let combustivelDF = 110;
let almocoDF = 30;
let manutencaoDF = 20;
let estaCansadoDF = false;

let gastosDF = combustivelDF + almocoDF + manutencaoDF;
let sobraDF = faturamentoDiaDF - gastosDF;

let bateuMetaDF = faturamentoDiaDF >= metaDiariaDF;
let sobraBoaDF = sobraDF >= 200;

if (bateuMetaDF && sobraBoaDF && !estaCansadoDF) {
    console.log("Dia excelente");
} else if (bateuMetaDF && sobraBoaDF) {
    console.log("Dia foi bom, mas atenção ao cansaço");
} else if (bateuMetaDF) {
    console.log("Bateu a meta, mas a sobra foi baixa");
} else {
    console.log("Dia baixo da meta");
}