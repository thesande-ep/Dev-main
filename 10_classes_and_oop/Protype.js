// let myName = "Sandeep      "

// console.log(myName.truelength);

let myHeros = ["Spiderman", "Thor"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.sandeep = function(){
    console.log(`Sandeep is present is all objects`)
}

Array.prototype.heySandeep = function(){
    console.log(`Sandeep says hellooo`)
}

// heroPower.getSpiderPower()
// heroPower.sandeep()
// myHeros.sandeep()

// myHeros.heySandeep()
// heroPower.heySandeep()


// Inheritance
// ****************Old Approach****************
const user = {
    name: 'Deepak',
    email: 'deepal@example.com'
}


const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// **************Modern Syntax****************

Object.setPrototypeOf(TeachingSupport, Teacher)

// ********************************************

let anotherUsername = "ChaiChai      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);    Obselete Property 
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Sandeep    ".trueLength();
"Coffee".trueLength();
