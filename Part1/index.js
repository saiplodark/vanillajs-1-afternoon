console.log("hello world")

board = []

function play(clickedId){
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);


let TLeft = board[0]
let TCenter =board[1]
let TRight =board[2]
let MLeft =board[3]
let MCenter =board[4]
let MRight =board[5]
let DLeft =board[6]
let DCenter =board[7]
let DRight =board[8]

if (TLeft !== undefined && TLeft === TCenter && TLeft === TRight){
    alert( `${TLeft} wins`);
    return;
}
if (MLeft !== undefined && MLeft === MCenter && MLeft === MRight){
    alert(`${MLeft} wins`);
    return;
}
if (DLeft !== undefined && DLeft === DCenter && DLeft === DRight){
    alert(`${DLeft} wins`);
    return;
}
if (TLeft !== undefined && TLeft === MLeft && TLeft === DLeft){
    alert(`${TLeft} wins`);
    return;
}
if (TCenter !== undefined && TCenter === MCenter && TCenter === DCenter){
    alert(`${TCenter} wins`);
    return;
}
if (TRight !== undefined && TRight === MRight && TRight === DRight){
    alert(`${TRight} wins`);
    return;
}
if (TLeft !== undefined && TLeft === MCenter && TLeft === DRight){
    alert(`${TLeft} wins`);
    return;
}
if (TRight !== undefined && TRight === MCenter && TRight === DLeft){
    alert(`${TRight} wins`);
    return;
}

let boardFull = true;
for(let i = 0; i<=8; i++){
    if (board[i] === undefined){
        boardFull = false
    }
}if(boardFull === true){
alert("CAT's game")
}
}