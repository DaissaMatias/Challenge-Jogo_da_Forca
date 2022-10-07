function desenharCanvas() {
    tabuleiro.lineWidth=8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle="#242424"
    tabuleiro.strokeStyle="func"
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