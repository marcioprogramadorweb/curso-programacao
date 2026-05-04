let inputMetaDiaria = document.getElementById("metaDiaria");
let inputFaturamento = document.getElementById("faturamento");
let inputCombustivel = document.getElementById("combustivel");
let inputAlmoco = document.getElementById("almoco");
let inputManutencao = document.getElementById("manutencao");
let inputHorasTrabalhadas = document.getElementById("horasTrabalhadas");

let botaoCalcular = document.getElementById("botaoCalcular");
let resultado = document.getElementById("resultado");

inputMetaDiaria.focus();

function limparResultado() {
  resultado.classList.remove("sucesso");
  resultado.classList.remove("erro");
}

function mostrarErro(mensagem, campo) {
  resultado.textContent = mensagem;
  resultado.classList.add("erro");
  campo.focus();
}

function limparCampos() {
  inputMetaDiaria.value = "";
  inputFaturamento.value = "";
  inputCombustivel.value = "";
  inputAlmoco.value = "";
  inputManutencao.value = "";
  inputHorasTrabalhadas.value = "";
}

function calcularGastosTotais(combustivel, almoco, manutencao) {
  return combustivel + almoco + manutencao;
}

function calcularSobra(faturamento, gastosTotais) {
  return faturamento - gastosTotais;
}

function calcularGanhoPorHora(faturamento, horasTrabalhadas) {
  return faturamento / horasTrabalhadas;
}

function verificarMeta(faturamento, metaDiaria) {
  return faturamento >= metaDiaria;
}

function verificarSobraBoa(sobraDia) {
  return sobraDia >= 200;
}

function verificarGanhoPorHoraBom(ganhoPorHora) {
  return ganhoPorHora >= 35;
}

function gerarMensagemMeta(bateuMeta) {
  if (bateuMeta) {
    return "Meta atingida.";
  } else {
    return "Meta não atingida.";
  }
}

function gerarMensagemBooleano(valor) {
  if (valor) {
    return "Sim";
  } else {
    return "Não";
  }
}

function classificarDia(bateuMeta, sobraBoa, ganhoPorHoraBom, gastosControlados) {
  if (bateuMeta && sobraBoa && ganhoPorHoraBom && gastosControlados) {
    return "Dia excelente e eficiente.";
  } else if (bateuMeta && sobraBoa && ganhoPorHoraBom) {
    return "Dia excelente.";
  } else if (bateuMeta && sobraBoa) {
    return "Dia bom.";
  } else if (bateuMeta) {
    return "Bateu a meta, mas a sobra foi baixa.";
  } else {
    return "Dia abaixo da meta.";
  }
}

function calcularPercentualGastos(gastosTotais, faturamento) {
    return (gastosTotais / faturamento) * 100;
}

function calcularGastosControlados(percentualGastos) {
    return percentualGastos <= 40;
}

function mostrarResultado(
  metaDiaria,
  faturamento,
  gastosTotais,
  sobraDia,
  horasTrabalhadas,
  ganhoPorHora,
  bateuMeta,
  sobraBoa,
  ganhoPorHoraBom,
  mensagemMeta,
  classificacaoDia,
  percentualGastos,
  gastosControlados
) {
  resultado.innerHTML = `
    <p class="destaque">Classificação: ${classificacaoDia}</p>

    <div class="resumo">
      <p>Meta diária: R$ ${metaDiaria}</p>
      <p>Faturamento: R$ ${faturamento}</p>
      <p>Gastos totais: R$ ${gastosTotais}</p>
      <p>Percentual de gastos: ${percentualGastos.toFixed(2)}%</p>
      <p>Sobra do dia: R$ ${sobraDia}</p>
      <p>Horas trabalhadas: ${horasTrabalhadas}</p>
      <p>Ganho por hora: R$ ${ganhoPorHora.toFixed(2)}</p>
      <p>${mensagemMeta}</p>
      <p>Bateu a meta? ${gerarMensagemBooleano(bateuMeta)}</p>
      <p>Sobra boa? ${gerarMensagemBooleano(sobraBoa)}</p>
      <p>Ganho por hora bom? ${gerarMensagemBooleano(ganhoPorHoraBom)}</p>
      <p>Gastos controlados? ${gerarMensagemBooleano(gastosControlados)}</p>
    </div>
  `;

  resultado.classList.add("sucesso");
}

botaoCalcular.addEventListener("click", function () {
  limparResultado();

  if (inputMetaDiaria.value.trim() === "") {
    mostrarErro("Informe a meta diária.", inputMetaDiaria);
    return;
  }

  if (inputFaturamento.value.trim() === "") {
    mostrarErro("Informe o faturamento.", inputFaturamento);
    return;
  }

  if (inputCombustivel.value.trim() === "") {
    mostrarErro("Informe o valor do combustível.", inputCombustivel);
    return;
  }

  if (inputAlmoco.value.trim() === "") {
    mostrarErro("Informe o valor do almoço.", inputAlmoco);
    return;
  }

  if (inputManutencao.value.trim() === "") {
    mostrarErro("Informe o valor da manutenção.", inputManutencao);
    return;
  }

  if (inputHorasTrabalhadas.value.trim() === "") {
    mostrarErro("Informe as horas trabalhadas.", inputHorasTrabalhadas);
    return;
  }

  let metaDiaria = Number(inputMetaDiaria.value);
  let faturamento = Number(inputFaturamento.value);
  let combustivel = Number(inputCombustivel.value);
  let almoco = Number(inputAlmoco.value);
  let manutencao = Number(inputManutencao.value);
  let horasTrabalhadas = Number(inputHorasTrabalhadas.value);

  if (metaDiaria <= 0) {
    mostrarErro("Informe uma meta diária válida maior que zero.", inputMetaDiaria);
    return;
  }

  if (faturamento <= 0) {
    mostrarErro("Informe um faturamento válido maior que zero.", inputFaturamento);
    return;
  }

  if (combustivel < 0) {
    mostrarErro("O combustível não pode ser negativo.", inputCombustivel);
    return;
  }

  if (almoco < 0) {
    mostrarErro("O almoço não pode ser negativo.", inputAlmoco);
    return;
  }

  if (manutencao < 0) {
    mostrarErro("A manutenção não pode ser negativa.", inputManutencao);
    return;
  }

  if (horasTrabalhadas <= 0) {
    mostrarErro("Informe uma quantidade de horas válida maior que zero.", inputHorasTrabalhadas);
    return;
  }

  let gastosTotais = calcularGastosTotais(combustivel, almoco, manutencao);
  let sobraDia = calcularSobra(faturamento, gastosTotais);
  let ganhoPorHora = calcularGanhoPorHora(faturamento, horasTrabalhadas);
  let percentualGastos = calcularPercentualGastos(gastosTotais, faturamento);
  let gastosControlados = calcularGastosControlados(percentualGastos);

  let bateuMeta = verificarMeta(faturamento, metaDiaria);
  let sobraBoa = verificarSobraBoa(sobraDia);
  let ganhoPorHoraBom = verificarGanhoPorHoraBom(ganhoPorHora);

  let mensagemMeta = gerarMensagemMeta(bateuMeta);
  let classificacaoDia = classificarDia(bateuMeta, sobraBoa, ganhoPorHoraBom, gastosControlados);
  

  mostrarResultado(
    metaDiaria,
    faturamento,
    gastosTotais,
    sobraDia,
    horasTrabalhadas,
    ganhoPorHora,
    bateuMeta,
    sobraBoa,
    ganhoPorHoraBom,
    mensagemMeta,
    classificacaoDia,
    percentualGastos,
    gastosControlados
  );

  limparCampos();
  inputMetaDiaria.focus();

  console.log("Mini projeto da Semana 2 calculado com sucesso.");
});