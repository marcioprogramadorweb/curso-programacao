//exercicio 1
let numero1 = 20;
let numero2 = 4;

console.log("Soma: ", numero1 + numero2);
console.log("Subtração: ", numero1 - numero2);
console.log("Multiplicação: ", numero1 * numero2);
console.log("Divisão: ", numero1 / numero2);

//exercicio2
let faturamento = 350;
let combustivel = 120;
let sobra = faturamento - combustivel;

console.log("Sobra: ", sobra);

//exercicio 3
let meta = 300;
let faturamento2 = 280;

let bateuMeta = faturamento2 >= meta;
console.log("Bateu a Meta? ", bateuMeta);

//exercicio 4
let idade = 18;
let verificaIdade = idade > 17;

console.log("Idade Maior que 17? ", verificaIdade);

//exercicio 5
let numero = 9;
let ehPar = numero % 2 === 0;

console.log("o numero é par? ", ehPar);

//exercicio 6
let preco = 25;
let quantidade = 6;

let total = preco * quantidade;
let verificaTotal = total > 100;

console.log("Valor Total: ", total);
console.log("É maior que 100? ", verificaTotal);

//mini desafio
let metaDiaria = 300;
let faturamentoDia = 340;
let combustivelDia = 95;
let almoco = 25;

let gastos = combustivelDia + almoco;
let sobraDia = faturamentoDia - gastos;
let bateuMetaDia = faturamentoDia >= metaDiaria;
let sobraMaior = sobraDia > 200;

console.log("Faturamento do Dia: ", faturamentoDia);
console.log("Total de gastos: ", gastos);
console.log("Sobra: ", sobraDia);
console.log("Bateu a Meta? ", bateuMetaDia);
console.log("Sobra maior que 200? ", sobraMaior);