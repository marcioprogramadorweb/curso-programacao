let inputFaturamento = document.getElementById("faturamento");
let inputCombustivel = document.getElementById("combustivel");
let inputAlmoco = document.getElementById("almoco");
let inputManutencao = document.getElementById("manutencao");
let inputHorasTrabalhadas = document.getElementById("horasTrabalhadas");

let botaoCalcular = document.getElementById("botaoCalcular");
let resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {
  resultado.classList.remove("sucesso");
  resultado.classList.remove("erro");

  if (
    inputFaturamento.value.trim() === "" ||
    inputCombustivel.value.trim() === "" ||
    inputAlmoco.value.trim() === "" ||
    inputManutencao.value.trim() === "" ||
    inputHorasTrabalhadas.value.trim() === ""
  ) {
    resultado.textContent = "Todos os campos são obrigatórios";
    resultado.classList.add("erro");
    return;
  }

  let faturamento = Number(inputFaturamento.value);
  let combustivel = Number(inputCombustivel.value);
  let almoco = Number(inputAlmoco.value);
  let manutencao = Number(inputManutencao.value);
  let horasTrabalhadas = Number(inputHorasTrabalhadas.value);

  if (faturamento <= 0) {
    resultado.textContent = "O faturamento deve ser maior que zero";
    resultado.classList.add("erro");
    return;
  }

  if (
    combustivel < 0 ||
    almoco < 0 ||
    manutencao < 0
  ) {
    resultado.textContent = "Digite apenas valores iguais ou maiores que zero nos campos financeiros.";
    resultado.classList.add("erro");
    return;
  }

  if (horasTrabalhadas <= 0) {
    resultado.textContent = "As horas trabalhadas precisam ser maiores que zero.";
    resultado.classList.add("erro");
    return;
  }

  let metaDiaria = 300;
  let gastosTotais = combustivel + almoco + manutencao;
  let sobraDia = faturamento - gastosTotais;
  let bateuMeta = faturamento >= metaDiaria;
  let ganhoPorHora = faturamento / horasTrabalhadas;
  let sobraBoa = sobraDia >= 200;

  let mensagemMeta;
  let classificacaoDia;

  if (bateuMeta) {
    mensagemMeta = "Meta atingida.";
  } else {
    mensagemMeta = "Meta não atingida.";
  }

  if (bateuMeta && sobraBoa) {
    classificacaoDia = "Dia bom";
  } else if (bateuMeta) {
    classificacaoDia = "Bateu a meta, mas a sobra foi baixa";
  } else {
    classificacaoDia = "Dia abaixo da meta";
  }

  resultado.innerHTML = `
    <p>Faturamento: R$ ${faturamento}</p>
    <p>Gastos totais: R$ ${gastosTotais}</p>
    <p>Sobra do dia: R$ ${sobraDia}</p>
    <p>Ganho por hora: R$ ${ganhoPorHora.toFixed(2)}</p>
    <p>${mensagemMeta}</p>
    <p>Classificação: ${classificacaoDia}</p>
  `;

  resultado.classList.add("sucesso");
});