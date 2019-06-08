//Sandbox file for testing JS code.

let myNums = [0, 4, 5, 6, 9, 12];

function calcNums(arr, fn) {
    var numArr = [];

    for (let i = 0; i < arr.length; i++) {
        numArr.push(fn(arr[i]));
    }

    return numArr;
}

function addNums(num) {
    return 12 + num;
}

var newNums = calcNums(myNums, addNums);

console.log(newNums);