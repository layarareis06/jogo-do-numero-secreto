let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}

function mensagensIniciais(){
    exibirTextoNaTela('h1', 'Jogo Do Número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
}

mensagensIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o numero com ${tentativas} ${palavraTentativa}! Parabens`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O numero é menor');
        } else {
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*100+1);
    let quantidadeNaLista = listaDeNumeros.length;
    console.log (numeroEscolhido);

    if (quantidadeNaLista==numeroLimite)[
        listaDeNumeros=[]
    ]
    if (listaDeNumeros.includes(numeroEscolhido))
        {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido)
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas;
    mensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}