'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;

// diceEl.classList.add('hidden');

let scores = [0, 0];
let currentscore = 0;
let activeplayer = 0; // player 1 is 0 player 2 is 1 
// rolling dice functionality

let playing = true;
const init = function() {

    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current1El.textContent = 0;
    current0El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    scores = [0, 0];
    currentscore = 0;
    diceEl.classList.add('hidden');

    activeplayer = 0;
}
const switchplayer = function() {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
init();
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. generate a random dice roll 
        const dice = Math.trunc(Math.random() * 6 + 1);
        // console.log(dice);
        // 2.display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. checked for rolled 1: if true, switch to next player

        if (dice !== 1) {
            // add dice to current score
            currentscore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        } else {
            //switch to next player
            switchplayer();

        }
    }


});

btnHold.addEventListener('click', function() {
    if (playing) { // 1 . add current score to active player's score
        console.log('hold button');

        scores[activeplayer] += currentscore;
        console.log(scores[activeplayer]);
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        // 2 . check if player's score is >= 100 
        if (scores[activeplayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }

        //3 . switch to next player
        else {
            switchplayer();
        }
    }
})


btnNew.addEventListener('click', function() {


    init();

})