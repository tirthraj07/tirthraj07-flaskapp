console.log("FOR DEVELOPERS ONLY. SEEING THE CONSOLE IS CHEATING!")
var number = Math.floor((Math.random())*100);
console.log("The Answer is:",number);
var lives = 10;
console.log(lives);
const livesDisplay = document.getElementsByClassName("lives")[0].getElementsByTagName('p')[0];
const inputElement = document.getElementById("guessed_no");
const color_hot_cold = document.getElementById("color-hot-cold");
const text_hot_cold = document.getElementById("text-hot-cold");
const easy_button = document.getElementById("easy_button");
const difficult_button = document.getElementById("difficult_button");


var difficulty = "easy";
var gameOver = "none";


function setLives(difficulty){
    if (difficulty==="easy"){
        easy_button.style.backgroundColor = "green";
        difficult_button.style.backgroundColor = "#111111";
        lives = 10;
        console.log("Total Lives",lives);
    }
    if (difficulty==="hard"){
        difficult_button.style.backgroundColor = "red";
        easy_button.style.backgroundColor = "#111111";
        lives = 5;
        console.log("Total Lives",lives);
    }
    return lives;
}

function guess(){
    console.log(lives);
    let inputValue = inputElement.value;
    console.log("You Guessed:",inputValue);
    inputElement.value = "";

    if(inputValue==number){
        gameOver = "winner";
    }else{
        lives = lives - 1;
        livesDisplay.textContent = lives;
        console.log("Remaining Lives",lives);
        let difference  = Math.abs(Number(inputValue)-Number(number));
        if(difference>0 && difference<=5){
            color_hot_cold.style.backgroundColor = "red";
            text_hot_cold.innerText = "VERY HOT";
        }
        if(difference>5 && difference<=10){
            color_hot_cold.style.backgroundColor  = "orange"
            text_hot_cold.innerText = "HOT";
        }
        if(difference>10 && difference<=15){
            color_hot_cold.style.backgroundColor  = "blue";
            text_hot_cold.innerText = "COLD";
        }   
        if(difference>15){
            color_hot_cold.style.backgroundColor  = "lightblue";
            text_hot_cold.innerText = "VERY COLD";
        }


    }



    if(gameOver==="winner"){
        console.log("You are the winner");
        color_hot_cold.style.backgroundColor  = "green";
        text_hot_cold.innerText = "WINNER!! :)";

        setTimeout(function(){
            let retry = confirm("WINNER!!! Wanna try again?");
            if (retry == false){
                console.log("Game Over");
                gameOver="none"
                livesDisplay.textContent = 0;
            }
            if(retry == true){
                inputValue = -1;
                number = Math.floor((Math.random())*100);
                console.log(number);
                lives = setLives(difficulty);
                gameOver="none"
                livesDisplay.textContent = lives;
                color_hot_cold.style.backgroundColor  = "lightblue";
                text_hot_cold.innerText = "VERY COLD";
        }},500)
    }
    if(lives<=0){
        color_hot_cold.style.backgroundColor  = "gray";
        text_hot_cold.innerHTML = `YOU LOST :( <br> THE NUMBER WAS ${number}`;
        console.log("You Lost");
        setTimeout(function(){
            let retry = confirm("Wanna try again?");
            if (retry == false){
                console.log("Game Over");
                gameOver="none"
                livesDisplay.textContent = 0;
            }
            if(retry == true){
                inputValue = -1;
                number = Math.floor((Math.random())*100);
                console.log(number);
                lives = setLives(difficulty);
                gameOver="none"
                livesDisplay.textContent = lives;
                color_hot_cold.style.backgroundColor  = "lightblue";
                text_hot_cold.innerText = "VERY COLD";
            }
        },500)


    }

}


function easyDifficulty(){
    var lives = 10;
    livesDisplay.textContent = lives;
    difficulty = "easy"
    setLives(difficulty)
    easy_button.style.backgroundColor = "green";
    difficult_button.style.backgroundColor = "#111111";
}

function hardDifficulty(){
    var lives = 5;
    livesDisplay.textContent = lives;
    difficulty = "hard";
    setLives(difficulty)
    difficult_button.style.backgroundColor = "red";
    easy_button.style.backgroundColor = "#111111";
}