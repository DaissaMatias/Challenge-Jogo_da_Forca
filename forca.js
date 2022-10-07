let tela = document.querySelector("canvas");
let btnNovoJogoDesaparecido = document.getElementById("btn-novo-jogo").style.display = "none";
let btnSairDesaparecer = document.getElementById("btn-sair").style.display = "none";
let divAgregarPalavra = document.getElementById("adicionar-palavra").style.display = "none";
let btnNovoJogo = document.getElementById("btn-novo-jogo");
let btnSair = document.getElementById("btn-sair");
let btnCancelar = document.getElementById("btn-cancelar");

var palavras = ['ALURA','FORCA','HTML','ORACLE','JAVASCRIPT','LOGICA','PROGRAMA','DESAFIO'];
var tabuleiro = document.getElementById('forca').getContext('2d');
var palavraSecreta = "";
var letras = [];
var palavraCorreta = "";
var erros = 8;
let letrasIncorretas = [];
let numeroDeErros = 8;
let LetraEscolhida = [];

document.getElementById("iniciar-jogo").onclick = () => {
    iniciarJogo()
}

document.getElementById("btn-salvar").onclick = () => {
    salvarPalavra();
}

btnNovoJogo.addEventListener("click",function () {
    location.reload();
});

btnSair.addEventListener("click", function () {
    location.reload();
})

btnCancelar.addEventListener("click", function() {
    location.reload();
});

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    return palavra
}

function verificaLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key);
        return false
    }
    else {
        letras.push(key)
        return true
    }
} 

function adicionarLetraCorreta(i) {
    palavraCorreta += palavrasecreta[i].toUpperCase()
}

function adicionarLetraIncorreta(letter) {
    if (palavraSecreta.indexOf(letter) <= 0){
        erros -= 1
    }
}

function verificarFimDeJogo(letra) {
    if(LetraEscolhida.length < palavraSecreta.length) {
        letrasIncorretas.push(letra);

        if (letrasIncorretas.length > numeroDeErros) {
            exibirDerrota();
        }
        else if(LetraEscolhida.length < palavraSecreta.length) {
            adicionarLetraIncorreta(letra);
            escreverLetraIncorreta(letra,erros)
        }
    }
}

function verificarVencedor(letra) {
    LetraEscolhida.push(letra.toUpperCase());
    if (LetraEscolhida.length == palavraSecreta.length) {
        exibirVitoria();
    }
}

function verificarLetra (keyCode) {
    if(typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
        return true;
    } else {
        return false;
    }
}

