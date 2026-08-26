// singleton

// object literals

const mySum = Symbol("key1")

const JsUser = {
    name: "Sunny",
    age: 20,
    [mySum]: "mykey1",
    location: "Noida",
    email: "sunny@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser.mySum)
// console.log(JsUser[mySum])

JsUser.email = "sunny@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="sunny@amazon.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());