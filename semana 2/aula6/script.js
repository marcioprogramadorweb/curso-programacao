let inputFaturamento = document.getElementById("faturamento");
let inputCombustivel = document.getElementById("combustivel");
let inputAlmoco = document.getElementById("almoco");
let inputManutencao = document.getElementById("manutencao");
let inputHorasTrabalhadas = document.getElementById("horasTrabalhadas");

let botaoCalcular = document.getElementById("botaoCalcular");
let resultado = document.getElementById("resultado");

inputFaturamento.focus();

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
  inputFaturamento.value = "";
  inputCombustivel.value = "";
  inputAlmoco.value = "";
  inputManutencao.value = "";
  inputHorasTrabalhadas.value = "";
}

function calcularGastosTotais(combustivel, almoco, manutencao) {
  return combustivel + almoco + manutencao;
}

function calcularGanhoPorHora(faturamento, horasTrabalhadas) {
  return faturamento / horasTrabalhadas;
}

function classificarDia(bateuMeta, sobraBoa, ganhoPorHoraBom) {
  if (bateuMeta && sobraBoa && ganhoPorHoraBom) {
    return "Dia excelente.";
  } else if (bateuMeta && sobraBoa) {
    return "Dia bom.";
  } else if (bateuMeta) {
    return "Bateu a meta, mas a sobra foi baixa.";
  } else {
    return "Dia abaixo da meta.";
  }
}

function mostrarResultado(faturamento, gastosTotais, sobraDia, ganhoPorHora, mensagemMeta, classificacaoDia, ganhoPorHoraBom) {
  let ganhoPorHoraBomMsg = gerarMensagemGanhoPorHoraBom(ganhoPorHoraBom);

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
}

function calcularSobra(faturamento, gastosTotais) {
    return faturamento - gastosTotais;
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

function gerarMensagemGanhoPorHoraBom(ganhoPorHoraBom) {
    if (ganhoPorHoraBom) {
        return "Sim.";
    } else {
        return "Não.";
    }
}

botaoCalcular.addEventListener("click", function () {
  limparResultado();

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

  let faturamento = Number(inputFaturamento.value);
  let combustivel = Number(inputCombustivel.value);
  let almoco = Number(inputAlmoco.value);
  let manutencao = Number(inputManutencao.value);
  let horasTrabalhadas = Number(inputHorasTrabalhadas.value);

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

  let metaDiaria = 300;
  let gastosTotais = calcularGastosTotais(combustivel, almoco, manutencao);
  let sobraDia = calcularSobra(faturamento, gastosTotais);
  let bateuMeta = verificarMeta(faturamento, metaDiaria);
  let ganhoPorHora = calcularGanhoPorHora(faturamento, horasTrabalhadas);
  let sobraBoa = verificarSobraBoa(sobraDia);
  let ganhoPorHoraBom = verificarGanhoPorHoraBom(ganhoPorHora);
  let mensagemMeta = gerarMensagemMeta(bateuMeta);
  let classificacaoDia = classificarDia(bateuMeta, sobraBoa, ganhoPorHoraBom);

  mostrarResultado(
    faturamento,
    gastosTotais,
    sobraDia,
    ganhoPorHora,
    mensagemMeta,
    classificacaoDia,
    ganhoPorHoraBom
  );

  limparCampos();
  inputFaturamento.focus();

  console.log("Cálculo realizado com sucesso.");
});