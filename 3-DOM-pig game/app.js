var score,roundScore,activePlayer,gamePlaying;

init();

document.querySelector('.dice').style.display = 'none'; //set the dice invisbile

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying){
        //Random number
        var dice = Math.floor(Math.random()*6 +1);  //create random number for dice

        //Display the result
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-'+dice+'.png';

        //update the roll number if the dive WAS NOT A 1
        if (dice !== 1) {
            // add score
            roundScore += dice //Same as roundScore = roundScore + dice
            document.getElementById('current-'+activePlayer).textContent = roundScore

        } else {
            nextPlayer();


        }

    }

})


//Hold button

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add CURRENT score to the global score
        score[activePlayer] += roundScore;
        
        //update the UI
        document.getElementById('score-'+activePlayer).textContent = score[activePlayer];




        //check if the player win 

        if (score[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER !'
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('acitve');
            document.querySelector('.dice').style.display = 'none'; //set the dice invisbile
            gamePlaying = false;



        } else {
            nextPlayer();

        }

    }
})


document.querySelector('.btn-new').addEventListener('click', init)





function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    //Same as
    /*
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    */
   
    //setting the scores to 0
    roundScore = 0;
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0

    //change the css for active player
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    //remove dice when get 0 
    document.querySelector('.dice').style.display = 'none';


}

function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //set the winner to player
    document.querySelector('#name-0').textContent = 'PLAYER 1'
    document.querySelector('#name-1').textContent = 'PLAYER 2'


    //set all to 0 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    //remove active class and winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none'; //set the dice invisbile


}