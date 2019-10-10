/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a funciton is contained in the global scope, the value of this is the window object. 
* 2. If a function is called by a preceeding dot (.) the object before that dot is this.
* 3. When using a construction function, this is referring to a specific instance of the object that is created and returned by the constructor.
* 4. This is explicitly defined when using the call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

function SayMyName(name){
    console.log(this);
    return name;
}
SayMyName("Leisha");

// code example for Window Binding

// Principle 2

const myObj = {
    greeting: 'Hello',
    saysHello: function(name){
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.saysHello('Leisha');

// code example for Implicit Binding

// Principle 3
function Person (greeter){
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function (){
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
    const bob = new Person('Bobby');
    const scoop = new Person('Digger');

    bob.speak();
    scoop.speak();

// code example for New Binding

// Principle 4

bob.speak.call (Bobby); 

// code example for Explicit Binding