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