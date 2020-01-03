//console.log(JintaeInfo, console);
/*
function sayHello(name, age){
    //console.log("Hello, "+name+"!"+" you have " + age +" years of age.");
    //console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

const returnString = sayHello("Jintae",27);
console.log(returnString);
*/

//calculator
const calculator = {
    plus : function (a, b){
        return a + b;
    },
    minus : function (a, b){
        return a - b;
    },
    power : function (a, b){
        return a ** b;
    },
    devide : function (a, b){
        return a / b;
    },
    multiply : function (a, b){
        return a * b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 2);
const multiply = calculator.multiply(5, 3);
const devide = calculator.devide(15,3);
const power = calculator.power(2,5);

console.log(plus, minus, multiply, devide, power);
