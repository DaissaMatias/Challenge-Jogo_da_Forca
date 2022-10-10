function desenharCanvas() {
    tabuleiro.lineWidth=8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle="#242424"
    tabuleiro.strokeStyle="#E1B25C"
    tabuleiro.fillRect(0,0,1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,500);
    tabuleiro.lineTo(900,500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function desenharLinhas() {
    tabuleiro.lineWidth=6
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle="#E1B25C"
    tabuleiro.beginPath();
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
        tabuleiro.moveTo(500+(largura*i),640)
        tabuleiro.lineTo(550+(largura*i),640)
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 52px Noto';
    tabuleiro.lineWidth= 6
    tabuleiro.lineCap= "round"
    tabuleiro.lineJoin= "round"
    tabuleiro.fillStyle= "#E1B25C"
    let largura=600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],505+(largura*index),620);
    tabuleiro.stroke();
}

function escreverLetraIncorreta(letra, errorsLeft) {
    tabuleiro.lineWidth= 6
    tabuleiro.font= 'bold 40px Noto';
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin= "round"
    tabuleiro.fillStyle="#E1B25C"
    tabuleiro.fillText(letra,535+(40*(10-errorsLeft)),710,40)

}

function desenharForca(pontos) {
    tabuleiro.lineWidth= 8
    tabuleiro.lineCap= "round"
    tabuleiro.lineJoin= "round"
    tabuleiro.strokeStyle= "#E1B25C"
    if(pontos===8) {
        tabuleiro.moveTo(700,500);
        tabuleiro.lineTo(700,100);
    }
    if(pontos===7) {
        tabuleiro.moveTo(850,100);
        tabuleiro.lineTo(700,100);
    }
    if(pontos===6) {
        tabuleiro.moveTo(850,100);
        tabuleiro.lineTo(850,171);
    }
    if(pontos===5) {
        tabuleiro.moveTo(900,230);
        tabuleiro.arc(850,230,50,0,Math.PI*2);
    }
    if(pontos===4) {
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(850,289);
    }
    if(pontos===3) {
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(800,450);
    }
    if(pontos===2) {
        tabuleiro.moveTo(850,389);
        tabuleiro.lineTo(890,450);
    }
    if(pontos===1) {
        tabuleiro.moveTo(850,330);
        tabuleiro.lineTo(800,389);
    }
    if(pontos===0) {
        tabuleiro.moveTo(850,330);
        tabuleiro.lineTo(890,389);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function exibirDerrota() {
    tabuleiro.font='bold 42px Noto'
    tabuleiro.lineWidth= 6
    tabuleiro.lineCap= "round"
    tabuleiro.lineJoin= "round"
    tabuleiro.fillStyle= "red"
    tabuleiro.fillText("Fim de Jogo!",930,320);
}

function exibirVitoria() {
    tabuleiro.font='bold 42px Noto'
    tabuleiro.lineWidth= 6
    tabuleiro.lineCap= "round"
    tabuleiro.lineJoin= "round"
    tabuleiro.fillStyle= "green"
    tabuleiro.fillText("Você Ganhou!",950,320);
    tabuleiro.fillText("Parabéns!",930,360);
    setTimeout(recarregar, 3000)
}

function recarregar() {
    location.reload();
}