'use strict';

let score,currentScore,activePlayer,playing;

const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');

// score0El.textContent=0;
// score1El.textContent=0;

const diceImg=document.querySelector('.dice');
diceImg.classList.add('hide');

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');



const init=function(){
    score=[0,0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;

    document.querySelector('#score--0').textContent=0;
    document.querySelector('#score--1').textContent=0;

    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
};

init();


const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};


document.querySelector('.btn--roll').addEventListener('click',function(){
    if(playing){
        let dice=Math.trunc(Math.random()*6)+1;

        diceImg.classList.remove('hide');
        diceImg.src=`dice-${dice}.png`;
    
        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
          switchPlayer();
        };
    }
});


document.querySelector('.btn--hold').addEventListener('click',function(){
    score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

    if(score[activePlayer] >= 20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        playing=false;
        diceImg.classList.add('hide');

    }else{
        switchPlayer();
        
    }
});

document.querySelector('.btn--new').addEventListener('click',init);



