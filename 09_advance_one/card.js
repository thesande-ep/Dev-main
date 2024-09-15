// const requestUrl = "https://api.github.com/users/hiteshchoudhary"
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', requestUrl)
//     // console.log("Here")
//     xhr.onreadystatechange = function(){
//         console.log(xhr.readyState);
//         if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         // console.log(data)
//         console.log(typeof(data))
//         console.log(data)
//         // console.log(this.responseText)
//         }
//     }
    
//     // console.log(xhr.readyState)
//     xhr.send();

const name = document.querySelector('#name');
const button = document.querySelector('#buton')
const imagee = document.querySelector('#image')
const follower = document.querySelector('#followers')

// const requestUrl = "https://api.github.com/users/hiteshchoudhary"
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl)
// xhr.onreadystatechange = function(){
//     const data = JSON.parse(this.responseText);
//     name.innerHTML = data.login
//     imagee.src="https://avatars.githubusercontent.com/u/11613311?v=4"
//     follower.innerHTML = data.followers

// }
// xhr.send();

button.addEventListener('click', ()=>{
    const requestUrl = "https://api.github.com/users/hiteshchoudhary"
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    const data = JSON.parse(this.responseText);
    name.innerHTML = data.login
    imagee.src="https://avatars.githubusercontent.com/u/11613311?v=4"
    follower.innerHTML = data.followers

}
xhr.send();
})