const rps = ['Rock','Paper','Scissors']

function tar (id) {
    return document.getElementById (id);
}

let playerScore = tar('playerScore').innerHTML = 0;
let compScore = tar('compScore').innerHTML = 0;
let playerChoice = '';


function computerSelection () {

      return rps[Math.floor(Math.random() * rps.length)];    
 };

function playerRock () {
     playerChoice = 'Rock';
     round();
}
function playerScissors () {
     playerChoice = 'Scissors';
     round();
}
function playerPaper () {
    playerChoice = 'Paper';
    round();
}




 function round () {
     compChoice = computerSelection();

     if(compChoice === playerChoice) {
        return   tar('scoreBoard').innerHTML = `It's a tie! Both played ${playerChoice}`;
     } else {
         if (playerChoice === 'Rock') {
             switch (compChoice) {
                 case 'Paper' :
                    compScore = tar('compScore').innerHTML = ++compScore;
                    tar('scoreBoard').innerHTML = 'You Lose! Paper beats Rock.';
                    scoreTracker ();
                    break;
                default:
                    playerScore = tar('playerScore').innerHTML = ++playerScore;
                    tar('scoreBoard').innerHTML = 'You Win! Rock beats Scissors.';
                    scoreTracker ();

                     
             }
         } else if (playerChoice === 'Paper') {
             switch (compChoice) {
                 case 'scissors':
                    compScore = tar('compScore').innerHTML = ++compScore;
                    tar('scoreBoard').innerHTML = 'You Lose! Scissors beats Paper.';
                    scoreTracker ();
                    break;
                default:
                    playerScore = tar('playerScore').innerHTML = ++playerScore;
                    tar('scoreBoard').innerHTML = 'You Win! Paper beats Rock.';
                    scoreTracker ();


             }
         } else {
             switch (compChoice) {
                 case 'Rock' :
                    compScore = tar('compScore').innerHTML = ++compScore;
                    tar('scoreBoard').innerHTML = 'You Lose! Rock beats Scissors.';
                    scoreTracker ();
                    break;
                default:
                    playerScore = tar('playerScore').innerHTML = ++playerScore;
                    tar('scoreBoard').innerHTML = 'You Win! Scissors beats Paper.';
                    scoreTracker ();


             }
         }
     }


 }
 /*function playRoundRock () {
    let playerSelection = 'Rock';    
    let compChoice = computerSelection(rps);
        if (compChoice === 'Rock') {             
          return   tar('scoreBoard').innerHTML = 'It\'s a tie! Both play Rock!';            
        } else if (compChoice === 'scissors') {
         return tar('scoreBoard').innerHTML = 'You Win! Rock beats Scissors.';
            playerScore = tar('playerScore').innerHTML = ++playerScore;
        } else if (compChoice === 'Paper') {
            tar('scoreBoard').innerHTML = 'You Lose! Paper beats Rock.';
            compScore = tar('compScore').innerHTML = ++compScore;
        }
    }; 
*/
function scoreTracker () {
    if (playerScore > compScore && playerScore === 5) {
        playerScore = tar ('playerScore').innerHTML = 0;
        compScore = tar ('compScore').innerHTML = 0; 
        return alert ('You Win!!');
    } else if  (compScore > playerScore && compScore === 5) {
        playerScore = tar ('playerScore').innerHTML = 0;
        compScore = tar ('compScore').innerHTML = 0; 
        return alert ('You Lose!!');

    }

}
  
