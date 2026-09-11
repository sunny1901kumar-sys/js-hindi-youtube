// let myName = "sunny     "
// let myChannel = "factoSapiens     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.sunny = function(){
    console.log(`sunny is present in all objects`);
};

Array.prototype.heySunny = function(){
    console.log(`Sunny says Hello`);
};

heroPower.sunny();
myHeros.sunny();
myHeros.heySunny();
// heroPower.heySunny(); // Removed: Plain Object cannot access Array prototype

// Inheritance
const User = {
    name: "chai",
    email: "chai@doodle.com"
};

const Teacher = {
    makeVideo: true // Fixed: Replaced browser-only TextTrackCue with a valid value
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiaurcode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"sunny".trueLength()
"iceTea".trueLength()