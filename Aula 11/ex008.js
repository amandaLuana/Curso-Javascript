//condicão simples
var velocidade = 81;
console.log(velocidade);
if (velocidade > 60 && velocidade < 80) { //condição simples (apenas if)
    console.log('Você ultrapassou a velocidade permitida MULTADO')

    //feito por mim
} else if (velocidade > 80) {
    console.log('Vai ser multado em R$500,00 reais');
} else {
    console.log('Não ultrapassou a velocidade')
}