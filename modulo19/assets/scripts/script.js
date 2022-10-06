const FRONT = "cardFront";
const BACK = "cardBack";
const CARD = "card";
const ICON = "icon";



startGame()

function startGame(){
    game.createCards();
    initializeCard(game.cards);
}

function initializeCard(cards){
    let board=document.getElementById("board");
    board.innerHTML='';
    cards.forEach((card)=>{
        let cardElement=document.createElement('div');
        cardElement.id=card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon=card.icon;
        createContent(card,cardElement);

        cardElement.addEventListener('click',flipCard);
        board.appendChild(cardElement);
    })
}

function createContent(card,cardElement){
    createFace(FRONT,card,cardElement);
    createFace(BACK,card,cardElement);
}
function createFace(face,card,element){
    let elementFace = document.createElement('div');
    elementFace.classList.add(face);
    if (face==FRONT){
        let icon =document.createElement('img');
        icon.classList.add(ICON);
        icon.src="./assets/images/"+card.icon+".png";
        elementFace.appendChild(icon);
    }else{
        elementFace.innerHTML="&lt/&gt";
    }
    element.appendChild(elementFace);
}

function flipCard(){
    if(game.setCard(this.id)){
        this.classList.add("flip");
        if(game.secondCard){
            if(game.checkMatch()){
                game.clearCards();
                if(game.checkGameOver()){
                    let gameOverLayer =document.getElementById("gameOver");
                    gameOverLayer.style.display='flex';
                }
            }else{
                setTimeout(()=>{
                    let first = document.getElementById(game.firstCard.id); 
                    let second = document.getElementById(game.secondCard.id);
                    first.classList.remove("flip");
                    second.classList.remove("flip");
                    game.unflip();
                },1000);
            }
        }
    }
}

function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer =document.getElementById("gameOver");
    gameOverLayer.style.display='none';
}

