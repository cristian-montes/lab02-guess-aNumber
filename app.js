// import functions and grab DOM elements
import { compareNums } from './utils.js';


// GET DOM ELEMENTS
const resultArea = document.getElementById('result-area');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const guessArea = document.getElementById('guess-area');
const restBtn = document.getElementById('reset-btn'); 

//MODIFED CONSTS'
const targetNumber = Math.floor(Math.random() * 20);

let count = 4;


// EVENT LISTENER - RESET BTN 
restBtn.addEventListener('click', ()=> {
    count = 4;
    guessInput.value = '';
    resultArea.textContent = '';  
    document.getElementById('submit-btn').disabled = false;
    guessArea.textContent = `You have ${count} oportunities AGAIN!`;
   
});

// EVENT LISTNER - SUBMIT BTN
submitBtn.addEventListener('click', ()=> {
    
    count --;
    const guessInputV = guessInput.value;
    const funCompareNums = compareNums(guessInputV, targetNumber);
    resultArea.textContent = funCompareNums;
    
    
    if (count <= 0 || funCompareNums === 'YOU WON') {
        document.getElementById('submit-btn').disabled = true;
        guessArea.textContent = 'GAME OVER';
    } else {
        guessArea.textContent = `You have ${count} left`;
    }
});
