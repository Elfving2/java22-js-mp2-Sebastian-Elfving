const textField = document.getElementById("playerNameTextField");
const playerName = document.getElementById("playerName");
const checkPlayerName = document.getElementById("checkPlayerName");

//check innerText of playerName and return it 
function textFieldValue() {
    if(textField.value.trim() == "") {
        checkPlayerName.innerText = "You have to choose a name to play the game!";
        console.log(playerName.textContent);
    } else {
        playerName.innerText = textField.value;
        checkPlayerName.remove();
        console.log(playerName.innerText);
        return playerName.textContent;
    }
}

// add name to playerName if textfield is not empty 
document.getElementById("playerNameButton").addEventListener("click", function(event) {
    event.preventDefault();
    textFieldValue();
});

//get all buttons inside div with id of box4
const buttons = document.querySelector("#choicesContainer").childNodes;
console.log(buttons);

let playerPoints = 0;
let computerPoints = 0;

// check if button value is greater then, equal to or less then, the computers random value.   
for (let i = 0;  i < buttons.length; i++) {
    buttons[i].addEventListener("click", event => {
    event.preventDefault();

    if(textFieldValue()) {
        const randomNumber = Math.round(Math.random() * 2);
        const computerChoices = ["🪨", "📰", "✂️"]; 
        const computerChoice = computerChoices[randomNumber];

        const playerPointsUpdate = document.getElementById("playerPoints");
        const computerPointsUpdate = document.getElementById("computerPoints");
        
        document.getElementById("computerChosen").innerText = "Computer: " + computerChoice;
        document.getElementById("playerChosen").innerText =  playerName.textContent + " " + buttons[i].value;
        console.log("computer " + computerChoice);
        console.log("player" + buttons[i].value);
        const winner = document.getElementById("winner");

        if(buttons[i].value === computerChoice) {
            winner.innerText = `Tie!`;
            console.log("its a tie!");
        } else if(buttons[i].value == "🪨" && computerChoice == "✂️") {
            winner.innerText = `${playerName.textContent} Winner!`;
            playerPointsUpdate.innerText = ++playerPoints;
        } else if(buttons[i].value == "📰" && computerChoice == "🪨"){
            winner.innerText = `${playerName.textContent} Winner!`;
            playerPointsUpdate.innerText = ++playerPoints;
        } else if(buttons[i].value == "✂️" && computerChoice == "📰") {
            winner.innerText = `${playerName.textContent} Winner!`;
            playerPointsUpdate.innerText = ++playerPoints;
        } else {
            winner.innerText = `Computer Winner!`;
            computerPointsUpdate.innerText = ++computerPoints;
        }
        // if player has gathered 3 points the following code will be runned 
        if(playerPoints == 3){
            console.log("player wins!");
            document.getElementById("gameWinner").innerText = `${playerName.textContent} Wins the game!`;
            document.getElementById("choicesContainer").classList.add("disabledbutton");
            
        // if computer has gathered 3 points the following code will be runned 
        }else if(computerPoints == 3) {
            console.log("computer Wins!");
            document.getElementById("gameWinner").innerText =  "Computer Wins the game";
            document.getElementById("choicesContainer").classList.add("disabledbutton");
        }
    }
    });
}

//restart the game
document.getElementById("resetButton").addEventListener("click", () => {
    location.reload();
});