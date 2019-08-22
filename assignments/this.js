/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding
* 2. implicit
* 3. new
* 4. explicit
*
* write out a code example of each explanation above
*/

// Principle 1
// this is refering to this when there's no object attach to it
// 'this' in this case is not associated with any object
// code example for Window Binding
function something (){
    console.log(this);
}


// Principle 2
// when you call a function with a . the 'this' in the function is refer to the variable preceeding the .
// code example for Implicit Binding

const myself = {
    name: "Toto",
    isAwesome: true,
    speak: function() {
        console.log(`Hi my name is ${this.name}`);
    }
}

myself.speak();
// this is implicit binding because I implicitly bind the function (from inside the object) to the specific object name 'myself'
// it's different than New Binding in that the binding in New Binding are first implicitly bind to the object but then using 'new' key word we bind all existing binding to a new object.


// Principle 3
// code example for New Binding

function Country(attributes) {
    this.name = attributes.name,
    this.capital = attributes.capital,
    this.population = attributes.population
}

// don't forget that Country is a funtion so you need that () and then put the object inside the ()
const china = new Country ({ name: "China", capital: "Beijing", population: "A lot."});

Country.prototype.infographic = function () {
    return `I am ${this.name}. My capital city is ${this.capital} and I have a population of ${this.population}.`
}

console.log(china.infographic())


// Principle 4
// this is calling things using .call or .apply
// code example for Explicit Binding

const thailand = new Country ({ name: "Thailand", capital: "Bangkok", population: "not as much as China"});

// eventhough it say china.infographic the .call(thailand) make it run the function infographic() as if from the object thailand
console.log(china.infographic.call(thailand));