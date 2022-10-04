document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener('click',handleClick);
    });
})

function handleClick(event){
    let square=event.target;
    let position = square.id;

    if(handleMove(position)){
        let playerName = 'Ninguém';
        if(velha){
            setTimeout(()=>{alert("Deu velha!!!")},10);
        }
        else if(playerTime==0)
        {
            playerName="Escudo";
        }
        else{
            playerName="Espadas";
        }
        setTimeout(()=>{alert(playerName + " venceu!!")},10);
        
    }
    updateSquares(position);
}

function updateSquares(position){
    let square =document.getElementById(position.toString());
    let symbol=board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function restartGame() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square =>{
        let position = square.id;
        let symbol=board[position];

        if(symbol != '' ) {
            square.innerHTML = ``
        }

    })
    board = ['','','',
             '','','',
             '','',''];
    playerTime=0;
    symbols = ['o','x'];
    gameOver = false;

}