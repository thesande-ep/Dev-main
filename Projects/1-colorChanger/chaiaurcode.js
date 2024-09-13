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