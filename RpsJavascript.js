let winCom = 0;
let winPla = 0;


function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    let computerSelection;
    if( num <= 3) {
       computerSelection = "rock";
    }
    else if (num > 3 && num <= 6) {
       computerSelection = "paper";
    }
    else if (num > 6 && num <= 9) {
       computerSelection = "scissor";
    }
    return computerSelection;
    }


    function getPlayerSelection() {
        let playerSelection = prompt("Let's play rock paper & scissor:");
        if(playerSelection === null || playerSelection.trim() === "") {
            alert("Write a valid string daii");
            return getPlayerSelection();
        }
        else if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissor") {
            return playerSelection.toLowerCase();
        }
        else {
            alert("idiott");
            return getPlayerSelection();
        }
    }


    function playRound() {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();

        console.log("Computer selection: " + computerSelection);
        console.log("Player selection: " + playerSelection);

        if (computerSelection === playerSelection) {
            alert("It's a tie! Both selected: " + computerSelection);
            console.log("Computer's score: " +winCom);
            console.log("Player's score: " +winPla);
        }
        else if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissor" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissor")) {
            alert("Computer wins! Computer selected: " + computerSelection + ", Player selected: " + playerSelection);
            winCom ++;
            console.log("Computer's score: " +winCom);
            console.log("Player's score: " +winPla);
        }
        else {
            alert("Player wins! Player selected: " + playerSelection + ", Computer selected: " + computerSelection);
            winPla ++;
            console.log("Computer's score: " +winCom);
            console.log("Player's score: " +winPla);
        }
    }

    
    function playGame(){
        for(let i = 0; i < 5; i++){
            playRound();
        } 
        if(winCom > winPla){
            alert("Computer wins " + winCom + " to " +winPla);
        }
        else if (winPla > winCom){
            alert("Player wins " + winPla + " to " +winCom);
        }
        else {
            alert("It's a tie");
        }
    }

