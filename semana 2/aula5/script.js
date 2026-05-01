let inputFaturamento = document.getElementById("faturamento");
let inputCombustivel = document.getElementById("combustivel");
let inputAlmoco = document.getElementById("almoco");
let inputManutencao = document.getElementById("manutencao");
let inputHorasTrabalhadas = document.getElementById("horasTrabalhadas");

let botaoCalcular = document.getElementById("botaoCalcular");
let resultado = document.getElementById("resultado");

inputFaturamento.focus();

botaoCalcular.addEventListener("click", function () {
  resultado.classList.remove("sucesso");
  resultado.classList.remove("erro");

  if (inputFaturamento.value.trim() === "") {
    resultado.textContent = "Informe o faturamento.";
    resultado.classList.add("erro");
    inputFaturamento.focus();
    return;
  }

  if (inputCombustivel.value.trim() === "") {
    resultado.textContent = "Informe o valor do combustível.";
    resultado.classList.add("erro");
    inputCombustivel.focus();
    return;
  }

  if (inputAlmoco.value.trim() === "") {
    resultado.textContent = "Informe o valor do almoço.";
    resultado.classList.add("erro");
    inputAlmoco.focus();
    return;
  }

  if (inputManutencao.value.trim() === "") {
    resultado.textContent = "Informe o valor da manutenção.";
    resultado.classList.add("erro");
    inputManutencao.focus();
    return;
  }

  if (inputHorasTrabalhadas.value.trim() === "") {
    resultado.textContent = "Informe as horas trabalhadas.";
    resultado.classList.add("erro");
    inputHorasTrabalhadas.focus();
    return;
  }

  let faturamento = Number(inputFaturamento.value);
  let combustivel = Number(inputCombustivel.value);
  let almoco = Number(inputAlmoco.value);
  let manutencao = Number(inputManutencao.value);
  let horasTrabalhadas = Number(inputHorasTrabalhadas.value);

  if (faturamento <= 0) {
    resultado.textContent = "Informe um faturamento válido maior que zero.";
    resultado.classList.add("erro");
    inputFaturamento.focus();
    return;
  }

  if (combustivel < 0) {
    resultado.textContent = "O combustível não pode ser negativo.";
    resultado.classList.add("erro");
    inputCombustivel.focus();
    return;
  }

  if (almoco < 0) {
    resultado.textContent = "O almoço não pode ser negativo.";
    resultado.classList.add("erro");
    inputAlmoco.focus();
    return;
  }

  if (manutencao < 0) {
    resultado.textContent = "A manutenção não pode ser negativa.";
    resultado.classList.add("erro");
    inputManutencao.focus();
    return;
  }

  if (horasTrabalhadas <= 0) {
    resultado.textContent = "Informe uma quantidade de horas válida maior que zero.";
    resultado.classList.add("erro");
    inputHorasTrabalhadas.focus();
    return;
  }

  let metaDiaria = 300;
  let gastosTotais = combustivel + almoco + manutencao;
  let sobraDia = faturamento - gastosTotais;
  let bateuMeta = faturamento >= metaDiaria;
  let ganhoPorHora = faturamento / horasTrabalhadas;
  let sobraBoa = sobraDia >= 200;
  let ganhoPorHoraBom = ganhoPorHora >= 35;

  let mensagemMeta;
  let classificacaoDia;
  let ganhoPorHoraBomMsg;

  if (ganhoPorHoraBom) {
    ganhoPorHoraBomMsg = "Sim";
  } else {
    ganhoPorHoraBomMsg = "Não";
  }

  if (bateuMeta) {
    mensagemMeta = "Meta atingida.";
  } else {
    mensagemMeta = "Meta não atingida.";
  }

  if (bateuMeta && sobraBoa && ganhoPorHoraBom) {
    classificacaoDia = "Dia excelente.";
  } else if (bateuMeta && sobraBoa) {
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
    <p>Ganho por hora bom? ${ganhoPorHoraBomMsg}</p>
  `;

  resultado.classList.add("sucesso");

  inputFaturamento.value = "";
  inputCombustivel.value = "";
  inputAlmoco.value = "";
  inputManutencao.value = "";
  inputHorasTrabalhadas.value = "";

  inputFaturamento.focus();
  console.log("Cálculo realizado com sucesso.");
});