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



```
