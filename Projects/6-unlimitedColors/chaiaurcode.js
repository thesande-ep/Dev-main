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