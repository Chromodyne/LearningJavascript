/*
//Function Constructor
var Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

//Instantiation of the object.
var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1965, 'waitress');


Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth )
}


//Object.create method

var personProto = {

    calculateAge: function() {

        console.log(2020 - this.yearOfBirth);

    }

};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {

    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}

})

//Primitives vs. Objects


//Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//Objects
var obj1 = {

    name: 'John',
    age: 26

};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 31;
var obj = {
    name: 'Devin',
    city: 'Las Vegas'
};

function change(a,b) {

    a = 19;
    b.city = 'San Francisco';

}

change(age, obj);

console.log(age);
console.log(obj.city);


//First-class functions
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {

        arrRes.push(fn(arr[i]));

    }

    return arrRes;

}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {

    return el >= 21;

}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81) {

    return Math.round(206.9 - (0.67 * el));

    } else {

        return -1;

    }

}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(maxRate);

//Returning Functions

function interviewQuestion(job) {

    if (job === 'designer') {

        return function(name) {

            console.log(name + ', can you please explain what UX design is?');

        }

    } else if (job === 'teacher') {
        
        return function(name) {

            console.log(name + ', what subject do you teach?');

        }
        
    } else {

        return function(name) {

            console.log('Hello ' + name + ', what do you do?');

        }

    }

}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');

teacherQuestion('Devin');
designerQuestion('John');
otherQuestion('Mary');


//IIFE

//Closures

function retirement(retirementAge) {

    var a = ' years left until retirement.';

    return function(yearOfBirth) {

        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);

    }
 
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//instead of calling a var.
// retirement(66)(1990);


//Mini-Challenge
//Rewrite the interview question from line 144 using the power of closures.

function interviewQuestion(job) {

    return function(name) {

        if (job === 'teacher') {

            console.log(name + ', what subject do you teach?');


        } else if (job === 'designer') {

            console.log(name + ', can you please explain what UX design is?');

        } else {

            console.log('Hello ' + name + ' what do you do?');

        }

    }


}

interviewQuestion('teacher')('Devin');
interviewQuestion('designer')('David');
interviewQuestion('other')('Derek');


//Bind, Call, & Apply

var john = {

        name: 'John',
        age: 26,
        job: 'teacher', 
        presentation: function(style, timeOfDay) {

            if (style === 'formal') {
                
                console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');

            } else if (style === 'friendly') {

                console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
            }
        }

}

var emily = {

    name: 'Emily',
    age: 35,
    job: 'designer',

}

john.presentation('formal', 'morning');

//We will use the call method to use the presentation method within john. The call method sets the 'this' variable.
john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['friendly','afernoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('evening');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {

        arrRes.push(fn(arr[i]));

    }

    return arrRes;

}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el, limit) {

    return el <= limit;

} 

var ages = arrayCalc(years, calculateAge);

//var usAge = arrayCalc(ages, arrayCalc.bind(this, 21));
//var euAge = arrayCalc(ages, arrayCalc.bind(this, 18));
var jpAge = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(jpAge);
*/
//=============================================================================================
//Coding Challenge #7 - Console Quiz Game

//Build the question function constructor.
function Question(question, answers, correctAnswer) {

    this.question = question,
    this.answers = answers = [],            //Let's try with an array.
    this.correctAnswer = correctAnswer      //Let's use an integer.

};

//Instantiate 3 question objects using the constructor.
var question1 = new Question(

    'What is the name of my dog?',
    ['0. Rex', '1.Thelonius', '2. Ceres'],
    2

)

var question2 = new Question(

    'Who is credited with theorizing the Earth was round?',
    ['0. Eratosthenes', '1.Galileo', '2. Copernicus'],
    0
    
)

var question3 = new Question(

    'What is the capital of Kansas?',
    ['0. Kansas City', '1. Topeka', '2. Providence'],
    1
    
)

//Store the questions inside of an array so that they can be easily accessed and picked from.
questionChoices = [question1,question2, question3];

//Create a function that will select one of the questions to be displayed.
function selector(questionChoices) {

    var randomSelection = Math.random(1);

} 
