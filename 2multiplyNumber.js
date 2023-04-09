// Function call
console.log(multiplyNumbers(2, 3));//ReferenceError: cannot access 'multiplyNumbers' before initialization, due to temporal dead zone.

// Function declration
const multiplyNumbers = function (arg1, arg2){
    multiple = arg1 * arg2;
    return multiple
}