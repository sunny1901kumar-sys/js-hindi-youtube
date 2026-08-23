// Primitive Datatypes

// 7 types: String, Number, Boolean,null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLogggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 45566544644546566n




// Reference (Non primitive)

// Array, Objects, Functions
const heros = [" shaktiman", "nagraj","doga"];
let myObj = {
    name: "sunny",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);




// *******************************

// ++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-Primitive)

let myYoutubename  = "sunnykumar"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sunny@google.com"

console.log(userOne.email);
console.log(userTwo.email);

