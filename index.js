/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
};
// - Create a method using prototype that gives the Person the ability to eat. 

Person.prototype.eat = function(someFood){
  if (this.stomach.length < 10){
    this.stomach.push(someFood)
  } 
};

// - Create a poop method 
// - this method when called should empty the array length to 0 items

Person.prototype.poop = function(){
  // return this.stomach.length = 0 
  return this.stomach = [];
};


// - Create a method called toString();
// - toString should return a string with name and age 
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}


Car.prototype.fill = function(gallons){
  this.tank =  gallons + this.tank;
  return this.tank;
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy ) {
Person.call(this, name, age);
this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}




/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/ Global Binding: This is the value of "this" in the console wich is the entire JS language.
  2. Implicit Binding: The most utalized appication of the this keyword. Basically you can identify what "this" is by just looking to the left of the dot. "this" is being called on that object. The ability for the "this" to be called on whatever it is being called on allows for modular code, and results depinding on what the "this" key word is being called on. 
  3. New Binding: Used with constructor functions "this" keyword refers to specific instance of the object that is created. Takes the value of whaterer argument you pass within the new Object of the constructure function. "this" keyword enalbles constructure functions to be modular and to be able to create new objects depeinding on what is passed as arguments. 
  4. Explicit Binding: Whenever we specifically apply a method to explictly create subclassed constructors. Any time we use the .call(), .apply(), or .bind() methods. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
