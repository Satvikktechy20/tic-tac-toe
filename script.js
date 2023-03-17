console.log("Welcom to Tic Tac Toe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let Gameover = new Audio("gameover.mp3");
let turn = "X";
let startbtn = document.querySelector(".startapp");
let gameover = false;
let count = 0;
let checker = true;

//Playing sound on startbtn click

startbtn.addEventListener('click',() =>{
    document.querySelector(".gameContainer").style.display = "flex";
    startbtn.style.display = "none";
    music.play();
    music.volume = 0.3;
})

//Function to change turn

const changeTurn = () =>{
    return turn === "X"?"0": "X";
}

//Function to check Win


const checkWin = () => {
    let boxtext = document.getElementsByClassName("box-text");
    
     let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
     ]
    
     wins.forEach( e => {
      
      if (boxtext[e[0]].innerText === boxtext[e[1]].innerText&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText != "")) {
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
       gameover = true;  
      Gameover.play();
       music.pause();
       document.querySelector("img").style.display = "block";
       count = 0;
       
    }
    else{
        checker = false;
    }
        

    })
};


//Game Logic Start

//Reset Game Logic

const reset = document.getElementById("reset");

reset.addEventListener("click",()=> {
    let boxtext = document.getElementsByClassName("box-text");


  Array.from(boxtext).forEach(element => {
    element.innerText = ""
    
 turn = "X";
 gameover = false;
    document.getElementsByClassName("info")[0].innerText = `${turn}'s turn`;
    document.querySelector("img").style.display = "none";
    count = 0;
 });
})


//Game Click on box logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".box-text");
    element.addEventListener('click',() => {
        
        if(gameover != true){
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            count = count+ 1;
               console.log(count);
            if(count == 9 && checker == false){
                document.querySelector(".info").innerText = "Game Drawn";
                gameover = true;  
               Gameover.play();
                music.pause();
                document.querySelector("img").style.display = "block";
                count = 0;
            }
            if(gameover == false){
            document.getElementsByClassName("info")[0].innerText = `${turn}'s turn`;
            }
        }
    }
    });
})

