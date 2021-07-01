export function compareNums(guessInput, targetNumber){
    if (guessInput < targetNumber){
        return 'TOO LOW';
    } if (guessInput > targetNumber){
        return 'TOO HIGH';
    } else {
        return 'YOU WON';
    }
}