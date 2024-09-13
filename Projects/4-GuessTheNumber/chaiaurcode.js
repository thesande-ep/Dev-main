// const max = 100;
// const min = 1;

// // let randomNumber = (Math.floor((Math.random()*(max-min+1)+min)));
// let randomNumber = (Math.floor((Math.random()*(max-min+1)+min)));
// let results = document.querySelector('.lowOrHi');
// let guess = document.querySelector('.lastResult')


// guess = 10
// while (guess >= 0){
//     form.addEventListener('submit', (evt)=>{
//         evt.preventDefault();
//         const input = parseInt(document.querySelector('#guessField').value);
//         if(input < randomNumber){
//             results.textContent = `Your input is too small, try something big`
//         }
//         else if (input > randomNumber){
//             results.textContent = `Your input is too big, try something small`
//         }
//         else{
//             results.textContent = `Hurray you win the game`
//         }
//     });
//     guess--;
// }

//My writter code above



let randomNumber = parseInt(Math.random() *100 +1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement('p')

let prevGuess  = []
let numGuess = 1

let playGame = true











if(playGame){
    submit.addEventListener('click', (evt)=>{
        evt.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}










function validateGuess(guess){
    // All the valid guess
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess<1){
        alert("Please enter a number more than or equal to 1")
    }
    else if(guess>100){
        alert("Please enter a number less than or equal to 100")
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}








function checkGuess(guess){
    //  All the check will happen here
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);;
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Your number is too low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Your number is too high`)
    }
}













function  displayGuess(guess){
    // 
    userInput.value = '';
    if (numGuess<10){
        guessSlot.textContent  += `${guess},`;
    }
    else{
        guessSlot.textContent  += `${guess}`;
    }
    // guessSlot.textContent  += `${guess},`;
    numGuess++;
    console.log(numGuess)
    remaining.textContent = `${11 - numGuess}`
}









function displayMessage(message){
    // 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}








function newGame(){
    //
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (evt)=>{
        randomNumber = parseInt(Math.random() *100 +1);
        prevGuess = [];
        numGuess = 1
        guessSlot.textContent = ''
        remaining.textContent = `${11 - numGuess}`
        userInput.removeAttribute('disabled');
        startOver.remove(p)
        playGame = true
    })
}





function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.textContent = `Start New Game`
    startOver.appendChild(p)
    playGame = false
    newGame();
}
