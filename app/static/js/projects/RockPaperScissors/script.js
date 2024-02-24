
var playerChoice;
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const exitButton = document.getElementsByClassName("exit")[0];


function start(){
    const title = document.getElementsByClassName("title_screen")[0];  
    title.style.display = "none";
    const selector = document.getElementsByClassName("selector")[0];
    selector.style.display = "flex";
    exitButton.style.display = "block";
}

function selectRock(){
    playerChoice = 'rock';
    playerRock.style.backgroundColor = "red";
    playerPaper.style.backgroundColor = "transparent";
    playerScissors.style.backgroundColor = "transparent";

    game(playerChoice);
}

function selectPaper(){
    playerChoice = 'paper';
    playerPaper.style.backgroundColor = "red";
    playerScissors.style.backgroundColor = "transparent";
    playerRock.style.backgroundColor = "transparent";

    game(playerChoice);
}

function selectScissors(){
    playerChoice = 'scissors';
    playerScissors.style.backgroundColor = "red"; 
    playerRock.style.backgroundColor = "transparent";
    playerPaper.style.backgroundColor = "transparent";

    game(playerChoice);
}

function game(playerChoice){
    let computerChoice;
    let computerChoiceClass;

    const displayComputerChoice = document.getElementsByClassName("displayComputerChoice")[0];
    displayComputerChoice.style.display = "grid";
    const computerChoiceDisplay = document.querySelectorAll(".computerChoiceDisplay");
    const displayResult = document.getElementsByClassName("displayResult")[0];
    const displayResultText = displayResult.getElementsByTagName("h2")[0];

    const selector = document.getElementsByClassName("selector")[0];
    selector.style.display = "none";  

    displayResult.style.display = "flex";

    let number = Math.floor((Math.random())*3);
    console.log(number);

    switch(number) {
        case 0:
            computerChoice = 'rock';
            computerChoiceClass = 'compRock';
            break;
        case 1:
            computerChoice = 'paper';
            computerChoiceClass = 'compPaper';
            break;
        case 2:
            computerChoice = 'scissors';
            computerChoiceClass = 'compScissors';
            break;
        default:
            computerChoice = 'rock';
            console.log("There is some issue here");
    }
    console.log("Computer Choice:", computerChoice);
    console.log("Player Choice", playerChoice);

    computerChoiceDisplay.forEach(element => {
        if(element.classList.contains(computerChoiceClass)){
            element.classList.remove('hidden');
        }
        else{
            element.classList.add('hidden');
        }
    });

    if(playerChoice==computerChoice){
        console.log("Tie");
        displayResultText.innerText = "TIE";
    }

    if(playerChoice=='rock'){
        if(computerChoice=='scissors'){
            console.log("Player Wins");
            displayResultText.innerText = "Player Wins!";
        }
        if(computerChoice=='paper'){
            console.log("Computer Wins");
            displayResultText.innerText = "Computer Wins!";
        }
    }

    if(playerChoice=='paper'){
        if(computerChoice=='rock'){
            console.log("Player Wins");
            displayResultText.innerText = "Player Wins!";
        }
        if(computerChoice=='scissors'){
            console.log("Computer Wins");
            displayResultText.innerText = "Computer Wins!";
        }
    }

    if(playerChoice=='scissors'){
        if(computerChoice=='paper'){
            console.log("Player Wins");
            displayResultText.innerText = "Player Wins!";
        }
        if(computerChoice=='rock'){
            console.log("Computer Wins");
            displayResultText.innerText = "Computer Wins!";
        }
    }

}


function retry(){
    const selector = document.getElementsByClassName("selector")[0];
    selector.style.display = "flex";    
    const displayComputerChoice = document.getElementsByClassName("displayComputerChoice")[0];
    displayComputerChoice.style.display = "none";
    const computerChoiceDisplay = document.querySelectorAll(".computerChoiceDisplay");
    computerChoiceDisplay.forEach(element => {
        element.classList.add('hidden');
    });

    const displayResult = document.getElementsByClassName("displayResult")[0];
    displayResult.style.display = "none";

    playerRock.style.backgroundColor = "transparent";
    playerPaper.style.backgroundColor = "transparent";
    playerScissors.style.backgroundColor = "transparent";
}


function exit(){
    retry();
    const selector = document.getElementsByClassName("selector")[0];
    selector.style.display = "none";
    exitButton.style.display = "none";
    const title = document.getElementsByClassName("title_screen")[0];  
    title.style.display = "block";


}
