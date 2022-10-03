function desenharCanvas() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#242424"
    tablero.strokeStyle="func"
    tablero.fillRect(0,0,1200,800);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function desenharLinhas() {
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle="#E1B25C"
    tablero.beginPath();
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
        tablero.moveTo(500+(largura*i),640)
        tablero.lineTo(550+(largura*i),640)
    }
    tablero.stroke();
    tablero.closePath();
}