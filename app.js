// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const resultArea = document.getElementById('result-area');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const guessArea = document.getElementById('guess-area');

const targetNumber = Math.floor(Math.random() * 20);
let count = 4;


// EVENT LISTNER
submitBtn.addEventListener('click', ()=> {
    
    count --;
    
    if (Number(guessInput.value) < targetNumber){
        resultArea.textContent = 'TOO LOW';
    } if (Number(guessInput.value) > targetNumber){
        resultArea.textContent = 'TOO HIGH';
    } if (Number(guessInput.value) === targetNumber){
        resultArea.textContent = 'YOU WIN';
    }
   
    guessArea.textContent = `You have ${count} left`;
});


