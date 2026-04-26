// Exercício 1
let idadeEx1 = 20;
let temDocumento = true;

if (idadeEx1 >= 18 && temDocumento) {
    console.log("Entrada permitida");
} else {
    console.log("Entrada negada");
}

// Exercício 2
let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
    console.log("Pagamento aprovado");
} else {
    console.log("Pagamento recusado");
}

// Exercício 3
let usuarioCorreto = true;
let senhaCorreta = false;

if (usuarioCorreto && senhaCorreta) {
    console.log("Login autorizado");
} else {
    console.log("Login negado");
}

// Exercício 4
let estaBloqueado = false;

if (!estaBloqueado) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// Exercício 5
let valorCompra = 150;
let clienteVip = true;

if (valorCompra > 100 || clienteVip) {
    console.log("Desconto aplicado");
} else {
    console.log("Sem desconto");
}


// Exercício 6
let faturamentoDia = 330;
let sobra = 210;

if (faturamentoDia >= 300 && sobra >= 200) {
    console.log("Dia bom");
} else {
    console.log("Dia comum");
}


// Mini desafio
let idade = 22;
let temCNH = true;
let temCarro = true;
let estaCansado = false;
let horario = 13;

if (idade >= 18 && temCNH && temCarro && !estaCansado && horario < 14) {
    console.log("Pode sair para trabalhar");
} else {
    console.log("Não deve sair agora");
}