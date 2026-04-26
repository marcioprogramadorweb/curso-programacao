// Aula 7 - Mini projeto final da Semana 1
// Projeto: Analisador de Dia de Trabalho

// 1. Dados de entrada
let metaDiaria = 300;
let faturamentoDia = 280;
let combustivel = 100;
let almoco = 25;
let manutencao = 15;
let horasTrabalhadas = 9;
let estaCansado = true;

// 2. Processamento
let gastosTotais = combustivel + almoco + manutencao;
let sobraDia = faturamentoDia - gastosTotais;
let ganhoPorHora = faturamentoDia / horasTrabalhadas;

// 3. Regras de análise
let bateuMeta = faturamentoDia >= metaDiaria;
let sobraBoa = sobraDia >= 200;
let trabalhouMuito = horasTrabalhadas > 10;
let diaSaudavel = !estaCansado && horasTrabalhadas <= 10;

let classificacaoDia;

if (bateuMeta && sobraBoa && diaSaudavel) {
    classificacaoDia = "Dia excelente";
} else if (bateuMeta && sobraBoa) {
    classificacaoDia = "Dia bom, mas atenção ao cansaço ou excesso de horas";
} else if (bateuMeta) {
    classificacaoDia = "Bateu a meta, mas a sobra foi baixa";
} else if (faturamentoDia >= 250) {
    classificacaoDia = "Ficou perto da meta";
} else {
    classificacaoDia = "Dia abaixo do esperado";
}

// 4. Saída no console
console.log("===== RESUMO DO DIA =====");
console.log("Meta diária: ", metaDiaria);
console.log("Faturamento: ", faturamentoDia);
console.log("Gastos totais: ", gastosTotais);
console.log("Sobra do dia: ", sobraDia);
console.log("Horas trabalhadas: ", horasTrabalhadas);
console.log("Ganho por hora: ", ganhoPorHora);
console.log("Bateu a meta? ", bateuMeta);
console.log("Sobra boa? ", sobraBoa);
console.log("Trabalhou muito? ", trabalhouMuito);
console.log("Dia saudável? ", diaSaudavel);
console.log("Classificação: ", classificacaoDia);


// Simulação 2
// 1. Dados de entrada
let metaDiaria2 = 300;
let faturamentoDia2 = 420;
let combustivel2 = 120;
let almoco2 = 35;
let manutencao2 = 30;
let horasTrabalhadas2 = 11;
let estaCansado2 = true;

// 2. Processamento
let gastosTotais2 = combustivel2 + almoco2 + manutencao2;
let sobraDia2 = faturamentoDia2 - gastosTotais2;
let ganhoPorHora2 = faturamentoDia2 / horasTrabalhadas2;
// 3. Regras de análise
let bateuMeta2 = faturamentoDia2 >= metaDiaria2;
let sobraBoa2 = sobraDia2 >= 200;
let trabalhouMuito2 = horasTrabalhadas2 > 10;
let diaSaudavel2 = !estaCansado2 && horasTrabalhadas2 <= 10;

let classificacaoDia2;

if (bateuMeta2 && sobraBoa2 && diaSaudavel2) {
    classificacaoDia2 = "Dia excelente";
} else if (bateuMeta2 && sobraBoa2) {
    classificacaoDia2 = "Dia bom, mas atenção ao cansaço ou excesso de horas";
} else if (bateuMeta2) {
    classificacaoDia2 = "Bateu a meta, mas a sobra foi baixa";
} else if (faturamentoDia2 >= 250) {
    classificacaoDia2 = "Ficou perto da meta";
} else {
    classificacaoDia2 = "Dia abaixo do esperado";
}

// 4. Saída no console
console.log("===== RESUMO DO DIA 2 =====");
console.log("Meta diária: ", metaDiaria2);
console.log("Faturamento: ", faturamentoDia2);
console.log("Gastos totais: ", gastosTotais2);
console.log("Sobra do dia: ", sobraDia2);
console.log("Horas trabalhadas: ", horasTrabalhadas2);
console.log("Ganho por hora: ", ganhoPorHora2);
console.log("Bateu a meta? ", bateuMeta2);
console.log("Sobra boa? ", sobraBoa2);
console.log("Trabalhou muito? ", trabalhouMuito2);
console.log("Dia saudável? ", diaSaudavel2);
console.log("Classificação: ", classificacaoDia2);


// Simulação 3
// 1. Dados de entrada
let metaDiaria3 = 300;
let faturamentoDia3 = 500;
let combustivel3 = 150;
let almoco3 = 30;
let manutencao3 = 25;
let horasTrabalhadas3 = 10;
let estaCansado3 = false;

// 2. Processamento
let gastosTotais3 = combustivel3 + almoco3 + manutencao3;
let sobraDia3 = faturamentoDia3 - gastosTotais3;
let ganhoPorHora3 = faturamentoDia3 / horasTrabalhadas3;
// 3. Regras de análise
let bateuMeta3 = faturamentoDia3 >= metaDiaria3;
let sobraBoa3 = sobraDia3 >= 200;
let trabalhouMuito3 = horasTrabalhadas3 > 10;
let diaSaudavel3 = !estaCansado3 && horasTrabalhadas3 <= 10;

let classificacaoDia3;

if (bateuMeta3 && sobraBoa3 && diaSaudavel3) {
    classificacaoDia3 = "Dia excelente";
} else if (bateuMeta3 && sobraBoa3) {
    classificacaoDia3 = "Dia bom, mas atenção ao cansaço ou excesso de horas";
} else if (bateuMeta3) {
    classificacaoDia3 = "Bateu a meta, mas a sobra foi baixa";
} else if (faturamentoDia3 >= 250) {
    classificacaoDia3 = "Ficou perto da meta";
} else {
    classificacaoDia3 = "Dia abaixo do esperado";
}

// 4. Saída no console
console.log("===== RESUMO DO DIA 3 =====");
console.log("Meta diária: ", metaDiaria3);
console.log("Faturamento: ", faturamentoDia3);
console.log("Gastos totais: ", gastosTotais3);
console.log("Sobra do dia: ", sobraDia3);
console.log("Horas trabalhadas: ", horasTrabalhadas3);
console.log("Ganho por hora: ", ganhoPorHora3);
console.log("Bateu a meta? ", bateuMeta3);
console.log("Sobra boa? ", sobraBoa3);
console.log("Trabalhou muito? ", trabalhouMuito3);
console.log("Dia saudável? ", diaSaudavel3);
console.log("Classificação: ", classificacaoDia3);