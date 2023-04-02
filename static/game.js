// Get the buttons
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

// Add event listeners to the buttons
rockButton.addEventListener("click", function() {
    play("rock");
});
paperButton.addEventListener("click", function() {
    play("paper");
});
scissorsButton.addEventListener("click", function() {
    play("scissors");
});

function play(playerChoice) {
    // Computer makes a choice
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Declare the winner
    declareWinner(playerChoice, computerChoice);
}

function declareWinner(playerChoice, computerChoice) {
    var result = document.getElementById("result");
    if (playerChoice === computerChoice) {
        result.textContent = "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win!";
    } else {
        result.textContent = "You lose!";
    }
}
