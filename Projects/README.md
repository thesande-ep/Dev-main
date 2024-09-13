# JavaScript Projects

## project 1 solution


```javascript

const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body");

buttons.forEach((button)=> {
    button.addEventListener('click', (color) =>{
        if(color.target.id === "grey"){
            body.style.backgroundColor = color.target.id;
            body.style.color = 'white';
        }
        else if(color.target.id === "white"){
            body.style.backgroundColor = color.target.id;
            body.style.color = 'black';
        }
        else if(color.target.id === "blue"){
            body.style.backgroundColor = color.target.id;
            body.style.color = 'red';
        }
        else if(color.target.id === "yellow"){
            body.style.backgroundColor = color.target.id;
            body.style.color = 'green';
        }
        else {
            body.style.backgroundColor = color.target.id;
            body.style.color = 'blue';
        }
    })
})


// const buttons = document.querySelectorAll('.button');

// const body = document.querySelector("body");

// buttons.forEach((button)=> {
//     button.addEventListener('click', (color) =>{
//         switch(color.target.id){
//             case "grey":
//                 body.style.backgroundColor = color.target.id;
//                 break;
//             case "white":
//                 body.style.backgroundColor = color.target.id;
//             case "white":
//                 body.style.backgroundColor = color.target.id;
//             case "blue":
//                 body.style.backgroundColor = color.target.id;
//             case "yellow":
//                 body.style.backgroundColor = color.target.id;
//             case "purple":
//                 body.style.backgroundColor = color.target.id;
//                 break;
//         }
//     })
// })

```


## project 2 Solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        // results.innerHTML = (weight/(Math.pow((height/100),2))).toFixed(2);
        const text = (weight/(Math.pow((height/100),2))).toFixed(2);
        // results.textContent = `<span>${text}</span>`
       // .textContent is consider as best other than innerHTML 
       if (text < 18.6){
        results.textContent = `You are under weight and your BMI is ${text}`;
       }
       else if (text >= 18.6 && text < 24.9 ){
        results.textContent = `You are Normal weight and your BMI is ${text}`;
       }
       else {
        results.textContent = `You are Over weight and your BMI is ${text}`;
       }
    }
})

```

## project 3 solution 

```javascript

const clock = document.querySelector('#clock');

setInterval(()=>{
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clock.textContent = date.toLocaleTimeString();
},1000)

```


## project 4 solution 

```javascript

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


```





## Project 5
```javascrript

const insert = document.querySelector('#insert')

window.addEventListener('keydown', (evt)=>{
    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                  <th>Key</th>
                  <th>Keycode</th>
                  <th>Code</th>
                </tr>
                <tr>
                  <td>${evt.key === ' ' ?'space':evt.key}</td>
                  <td>${evt.keyCode}</td>
                  <td>${evt.code}</td>
                </tr>
            </table>
        </div>
    `
})

```

## Project 6

```javascript

// Generate a random color

const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");


const randomColor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}



let intervalId;
const startChangingColor = ()=>{
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = ()=>{
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


// My writen code with minimum variables



// let intervalId;
// let startButton = startbutton.addEventListener('click',()=>{
//     intervalId = setInterval(changeBgColor, 1000);
//     function changeBgColor(){
//         document.body.style.background = randomColor()
//     }
// })

// let stopButton = stopbutton.addEventListener('click',()=>{
//     clearInterval(intervalId);
// })

```