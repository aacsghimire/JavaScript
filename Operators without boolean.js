

// Falsy (false) values below
    // undefined
    // null
    // 0
    // false
    // NaN (Not a number)


let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);