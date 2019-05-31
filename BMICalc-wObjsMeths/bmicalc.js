//This script calculates the BMI of two people using set values for height and mass. The purpose is to learn how to group information into an object
//and use a method inside of the object to calculate the BMI of the people. It is an exercise in understanding objects, methods, and dot notation.

let john = {
    firstName: "John",
    lastName: "Smith",
    height: 1.82,
    mass: 81,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
    }
}

let mark = {
    firstName: "Mark",
    lastName: "Lane",
    height: 1.73,
    mass: 74,
    calculateBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
    }
}

john.calculateBMI();
mark.calculateBMI();

console.log(john);
console.log(mark);