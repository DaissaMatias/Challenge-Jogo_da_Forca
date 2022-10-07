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

