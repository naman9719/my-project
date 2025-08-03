//                     javascript

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let Newbtn = document.querySelector("#Newbtn");
let msgcontainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");


 let turn0 = true;    //player x, player y

const winpatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
turn0 = true;
enableboxes();
msgcontainer.classList.add("hide");
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {               //player0
            box.innerText = "o";
            turn0 = false;
        }
         else {                 //playerx  
box.innerText = "x";
turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for( let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (Winner) => {
msg.innerHTML = `congratulations, Winner is ${Winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
}

const checkWinner =() =>{
    for( let pattern of winpatterns) {
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val !="" && pos3val != "") {
            if(pos1val ===pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }
        }
    }


};

Newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);