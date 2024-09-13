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


























// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');
// const buttons = document.querySelectorAll('button');

// const BMI = weight/(Math.pow((height/100),2));

// buttons.forEach((button)=>{
//     button.addEventListener('submit', (BMI)=>{
//         console.log(BMI)
//     })
// })

