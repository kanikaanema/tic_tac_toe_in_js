const squares = document.querySelectorAll(".square");
const board = document.querySelector(".board");
const winorlose = document.querySelector(".winorlose");

const endgame = document.querySelector(".endGame");
endgame.style.textAlign = "center";
endgame.addEventListener("mouseover",()=>{
    endgame.classList.add("hover");
})
const players = ["X", "O"];
let currentPlayer = players[0];

let winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];


winorlose.textContent = " It's X turn";
winorlose.style.textAlign = "center";


squares.forEach((square)=>{                    //Loop over each square
   square.addEventListener("click", (()=>{
    if (square === "") {
        return
    }
    square.textContent = currentPlayer
    // console.log(currentPlayer)

    if (winner(currentPlayer)) {
        winorlose.textContent = `game over ${currentPlayer} wins`
        endgame.textContent = "restart game"
        return                                               // return when player win
    }
    if(Tie()){
       winorlose.textContent = "its a tie"
       return                                               // return when game Tie
    }

    //change the turn of players acc. to conditions
    currentPlayer = (currentPlayer === players[0] ? players[1] : players[0])      
    console.log(currentPlayer)
    if (currentPlayer == players[0]) {
        winorlose.textContent = "It's X turn"
    } else {
        winorlose.textContent = "It's O turn"
    }
    }))
})



function winner(currentPlayer) {
    for (let i = 0; i < winning_combinations.length; i++) {
        const [square1, square2, square3] = winning_combinations[i]

        if (squares[square1].textContent === currentPlayer && squares[square2].textContent === currentPlayer && squares[square3].textContent === currentPlayer) {
            console.log("ouwin")
            return true
        }
    }
    return false
}


function Tie(){
    for(let i = 0; i<squares.length; i++){
        if(squares[i].textContent == ""){
            return false
        }
    }
    return true
   
}

function restart(){
   squares.forEach((square)=>{
    square.textContent = ""
   })
    winorlose.textContent = "It's X turn";
    endgame.textContent = ""
}


