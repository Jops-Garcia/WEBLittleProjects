let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calc");
    let adultos=inputAdultos.value;
    let criancas=inputCriancas.value;
    let duracao=inputDuracao.value;

    let qtdCarne= carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdCerveja= cervejaPP(duracao) * adultos;
    let qtdBebidas= bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qtdCarne);
    console.log(qtdCerveja);
    resultado.innerHTML=`<p>${qtdCarne/1000} Kg de carne`
    resultado.innerHTML+=`<p>${Math.ceil(qtdCerveja/355)} Latas de cerveja`
    resultado.innerHTML+=`<p>${Math.ceil(qtdBebidas/2000)} Garrafas de bebidas (2L)`
}

function carnePP(duracao){
    if (duracao >=6){
        return 650;
    }
    return 400;
}

function cervejaPP(duracao){
    if (duracao >=6){
        return 2000;
    }
    return 1200;
}

function bebidasPP(duracao){
    if (duracao >=6){
        return 1500;
    }
    return 1000;
}