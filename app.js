alert ('Boas vindas ao jogo do número secreto')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while = enquanto chute nao for o numeroSecreto
while(chute != numeroSecreto) {
chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);
// if(Se) o numero secreto for igual chute ele tras um alert, se não, trará um alert de dicas
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas +1;
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' // operador ternário " : "
alert(`Voce acertou, parabéns o numero é ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );

/*if(tentativas > 1) {
alert(`Voce acertou, parabéns o numero é ${numeroSecreto} com ${tentativas} tentativas` );
} else {
    alert(`Voce acertou, parabéns o numero é ${numeroSecreto} com ${tentativas} tentativa` )
}*/