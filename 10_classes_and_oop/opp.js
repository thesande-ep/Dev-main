const user = {
    username: "thesande-ep",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from user")
        // console.log(`Username: ${this.username}`)
        console.log(this)
        // return (`Username: ${this.username}`)
    }
}

// console.log(user["username"])
// console.log(user.getUserDetails())
// console.log(user.getUserDetails())
// user.getUserDetails()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userOne = new User("Sandeep", 12, true)
const userTwo = new User("Rohit", 13, true)
const userThree = new User("Naman", 72, false)
const userFour = new User("Karan", 52, true)
const userFive = new User("Arjun", 20, true)

console.log(userOne.constructor)
// console.log(userTwo)
// console.log(userThree)
// console.log(userFour)