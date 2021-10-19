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

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const score = [0, 0];
let currentscore = 0;
let activeplayer = 0; // player 1 is 0 player 2 is 1 
// rolling dice functionality

btnRoll.addEventListener('click', function() {
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

        document.getElementById(`current--${activeplayer}`).textContent = 0;
        activeplayer = activeplayer === 0 ? 1 : 0;
        currentscore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});