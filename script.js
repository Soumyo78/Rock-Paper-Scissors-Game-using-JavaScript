let btnIdArr = ["rock-btn", "paper-btn", "scissors-btn"];
let messageArr = ["Congratulations, you won!", "Well played, match is tied!", "Sorry, You lost the match!"];
let scoreObj = {};

function onButtonClick(playerChoice){
    let playerSelectObj = {};
    let aiSelectObj = {};
    let playerScore = parseInt(document.getElementById('player-score').innerHTML);
    let aiScore = parseInt(document.getElementById('ai-score').innerHTML);
    let tiedScore = parseInt(document.getElementById('tied-score').innerHTML);


    function checkRock(){
        (playerChoice.match(btnIdArr[0]))?
        (playerSelectObj["rock-btn"] = true) :
        (playerSelectObj["rock-btn"]) = false;
    }

    function checkPaper(){
        (playerChoice.match(btnIdArr[1]))?
        (playerSelectObj["paper-btn"] = true) :
        (playerSelectObj["paper-btn"]) = false;
    }

    function checkScissors(){
        (playerChoice.match(btnIdArr[2]))?
        (playerSelectObj["scissors-btn"] = true) :
        (playerSelectObj["scissors-btn"]) = false;
    }

    function aiSelection(){
        let num = Math.floor(Math.random()*3);
        (num == 0) ? (aiSelectObj["rock-btn"] = true) : (aiSelectObj["rock-btn"] = false);
        (num == 1) ? (aiSelectObj["paper-btn"] = true) : (aiSelectObj["paper-btn"] = false);
        (num == 2) ? (aiSelectObj["scissors-btn"] = true) : (aiSelectObj["scissors-btn"] = false);
    }

    function winnerSelection(playerObj, aiObj, msgArr){
        ((playerObj["rock-btn"] && aiObj["rock-btn"]) || (playerObj["paper-btn"] && aiObj["paper-btn"]) || (playerObj["scissors-btn"] && aiObj["scissors-btn"])) ? (document.getElementById('play-status').innerHTML = msgArr[1]) && (tiedScore += 1)
        : ((playerObj["rock-btn"] && aiObj["scissors-btn"]) || (playerObj["scissors-btn"] && aiObj["paper-btn"]) || (playerObj["paper-btn"] && aiObj["rock-btn"])) ? (document.getElementById('play-status').innerHTML = msgArr[0]) && (playerScore += 1)
        : ((playerObj["rock-btn"] && aiObj["paper-btn"]) || (playerObj["paper-btn"] && aiObj["scissors-btn"]) || (playerObj["scissors-btn"] && aiObj["rock-btn"])) ? (document.getElementById('play-status').innerHTML = msgArr[2]) && (aiScore += 1)
        : "No Decision";

        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('ai-score').innerHTML = aiScore;
        document.getElementById('tied-score').innerHTML = tiedScore;
    }

    function rpsGame(){
        (playerSelectObj["rock-btn"]) ? (document.getElementById('left-hand-img').src = "Resources/hand-rock.png")
        : (playerSelectObj["paper-btn"]) ? (document.getElementById('left-hand-img').src = "Resources/hand-paper.png")
        : (playerSelectObj["scissors-btn"]) ? (document.getElementById('left-hand-img').src = "Resources/hand-scissors.png")
        : "Wrong Choice";

        (aiSelectObj["rock-btn"]) ? (document.getElementById('right-hand-img').src = "Resources/hand-rock.png")
        : (aiSelectObj["paper-btn"]) ? (document.getElementById('right-hand-img').src = "Resources/hand-paper.png")
        : (aiSelectObj["scissors-btn"])? (document.getElementById('right-hand-img').src = "Resources/hand-scissors.png")
        : "Wrong Choice";

        document.getElementById('rock-btn').disabled = true;
        document.getElementById('paper-btn').disabled = true;
        document.getElementById('scissors-btn').disabled = true;

        winnerSelection(playerSelectObj, aiSelectObj, messageArr);

        setTimeout(()=>{
            document.getElementById('left-hand-img').src = "Resources/hand-default.png";
            document.getElementById('right-hand-img').src = "Resources/hand-default.png";
            document.getElementById('rock-btn').disabled = false;
            document.getElementById('paper-btn').disabled = false;
            document.getElementById('scissors-btn').disabled = false;
            document.getElementById('play-status').innerHTML = "Play Now!"
            document.getElementById('reset-btn').disabled = false;
        }, 2000)
    }

    checkRock();
    checkPaper();
    checkScissors();
    aiSelection();
    rpsGame();

    console.log(playerScore)
    console.log(aiScore)
}

function resetGame(){
    window.location.reload(true);
}