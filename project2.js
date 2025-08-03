let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options  = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() => {
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose.${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //generate copmuter choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};






choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
playGame(userchoice);
    });
});

